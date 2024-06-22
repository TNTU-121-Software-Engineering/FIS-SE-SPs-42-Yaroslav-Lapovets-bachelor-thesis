package autoservice.controller;

import autoservice.dto.request.GoodsRequestDto;
import autoservice.dto.response.GoodsResponseDto;
import autoservice.dto.response.OwnerResponseDto;
import autoservice.model.Goods;
import autoservice.service.GoodsService;
import autoservice.service.mapper.GoodsMapper;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/goods")
public class GoodsController {
    private final GoodsService goodsService;
    private final GoodsMapper goodsMapper;

    public GoodsController(GoodsService goodsService, GoodsMapper goodsMapper) {
        this.goodsService = goodsService;
        this.goodsMapper = goodsMapper;
    }

    @GetMapping("/{id}")
    public GoodsResponseDto getRepairmanById(@PathVariable Long id) {
        return goodsMapper.mapToDto(goodsService.getById(id));
    }

    @GetMapping
    public List<GoodsResponseDto> getAllGoods() {
        return goodsService.getAll().stream()
                .map(goodsMapper::mapToDto)
                .collect(Collectors.toList());
    }

    @PutMapping("/{id}")
    public GoodsResponseDto updateGoods(@PathVariable Long id,
                                       @Valid @RequestBody GoodsRequestDto goodsRequestDto) {
        Goods goods = goodsMapper.mapToModel(goodsRequestDto);
        goods.setId(id);
        return goodsMapper.mapToDto(goodsService.create(goods));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public GoodsResponseDto createGoods(@Valid @RequestBody GoodsRequestDto goodsRequestDto) {
        return goodsMapper.mapToDto(goodsService.create(
                goodsMapper.mapToModel(goodsRequestDto)));
    }
}
