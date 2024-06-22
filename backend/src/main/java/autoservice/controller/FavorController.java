package autoservice.controller;

import autoservice.dto.request.FavorRequestDto;
import autoservice.dto.response.FavorResponseDto;
import autoservice.dto.response.OwnerResponseDto;
import autoservice.model.Favor;
import autoservice.service.FavorService;
import autoservice.service.StatusService;
import autoservice.service.mapper.FavorMapper;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/favors")
public class FavorController {
    private final FavorService favorService;
    private final FavorMapper favorMapper;
    private final StatusService statusService;

    public FavorController(FavorService favorService,
                           FavorMapper favorMapper,
                           StatusService statusService) {
        this.favorService = favorService;
        this.favorMapper = favorMapper;
        this.statusService = statusService;
    }

    @GetMapping("/{id}")
    public FavorResponseDto getRepairmanById(@PathVariable Long id) {
        return favorMapper.mapToDto(favorService.getById(id));
    }

    @GetMapping
    public List<FavorResponseDto> getAllFavors() {
        return favorService.getAll().stream()
                .map(favorMapper::mapToDto)
                .collect(Collectors.toList());
    }

    @PutMapping("/{id}")
    public FavorResponseDto updateFavor(@PathVariable Long id,
                                       @Valid @RequestBody FavorRequestDto favorRequestDto) {
        Favor favor = favorMapper.mapToModel(favorRequestDto);
        favor.setId(id);
        return favorMapper.mapToDto(favorService.create(favor));
    }

    @PutMapping("/{id}/status")
    public FavorResponseDto updateFavorStatus(@PathVariable Long id,
                                              @RequestParam String newStatus) {
        return favorMapper
                .mapToDto(favorService
                        .create(statusService
                                .changeFavorStatus(id, Favor.Status.valueOf(newStatus))));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public FavorResponseDto createFavor(@Valid @RequestBody FavorRequestDto favorRequestDto) {
        return favorMapper
                .mapToDto(favorService
                        .create(favorMapper.mapToModel(favorRequestDto)));
    }
}
