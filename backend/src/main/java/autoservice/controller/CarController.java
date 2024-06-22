package autoservice.controller;

import autoservice.dto.request.CarRequestDto;
import autoservice.dto.response.CarResponseDto;
import autoservice.model.Car;
import autoservice.service.CarService;
import autoservice.service.OwnerService;
import autoservice.service.mapper.CarMapper;

import javax.annotation.security.RolesAllowed;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/cars")
public class CarController {
    private final CarService carService;
    private final CarMapper carMapper;
    private final OwnerService ownerService;

    public CarController(CarService carService,
                         CarMapper carMapper,
                         OwnerService ownerService) {
        this.carService = carService;
        this.carMapper = carMapper;
        this.ownerService = ownerService;
    }

    @GetMapping
    public List<CarResponseDto> getAllCars() {
        return carService.getAll().stream()
                .map(carMapper::mapToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public CarResponseDto getCarById(@PathVariable Long id) {
        return carMapper.mapToDto(carService.getById(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CarResponseDto createCar(@Valid @RequestBody CarRequestDto carRequestDto) {
        Car car = carMapper.mapToModel(carRequestDto);
        ownerService.create(ownerService.addCar(carRequestDto.getOwnerId(), car));
        return carMapper.mapToDto(carService.create(car));
    }

    @PutMapping("/{id}")
    public CarResponseDto updateCar(@PathVariable Long id,
                                      @Valid @RequestBody CarRequestDto carRequestDto) {
        Car car = carMapper.mapToModel(carRequestDto);
        car.setId(id);
        return carMapper.mapToDto(carService.create(car));
    }
}
