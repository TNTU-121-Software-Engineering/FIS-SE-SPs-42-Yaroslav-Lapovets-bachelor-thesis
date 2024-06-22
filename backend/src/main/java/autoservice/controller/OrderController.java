package autoservice.controller;

import autoservice.dto.request.FavorRequestDto;
import autoservice.dto.request.GoodsRequestDto;
import autoservice.dto.request.OrderRequestDto;
import autoservice.dto.response.OrderResponseDto;
import autoservice.dto.response.RepairmanResponseDto;
import autoservice.model.Order;
import autoservice.model.Owner;
import autoservice.service.OrderService;
import autoservice.service.OwnerService;
import autoservice.service.StatusService;
import autoservice.service.mapper.FavorMapper;
import autoservice.service.mapper.GoodsMapper;
import autoservice.service.mapper.OrderMapper;
import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders")
public class OrderController {
    private final OrderMapper orderMapper;
    private final OrderService orderService;
    private final GoodsMapper goodsMapper;
    private final OwnerService ownerService;
    private final FavorMapper favorMapper;
    private final StatusService statusService;

    public OrderController(OrderMapper orderMapper,
                           OrderService orderService,
                           GoodsMapper goodsMapper,
                           OwnerService ownerService,
                           FavorMapper favorMapper,
                           StatusService statusService) {
        this.orderMapper = orderMapper;
        this.orderService = orderService;
        this.goodsMapper = goodsMapper;
        this.ownerService = ownerService;
        this.favorMapper = favorMapper;
        this.statusService = statusService;
    }

    @GetMapping("/{id}")
    public OrderResponseDto getOrderById(@PathVariable Long id) {
        return orderMapper.mapToDto(orderService.getById(id));
    }

    @GetMapping
    public List<OrderResponseDto> getAllOrders() {
        return orderService.getAll().stream()
                .map(orderMapper::mapToDto)
                .collect(Collectors.toList());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public OrderResponseDto createOrder(@Valid @RequestBody OrderRequestDto orderRequestDto) {
        Order order = orderMapper.mapToModel(orderRequestDto);
        orderService.create(order);
        Owner owner = ownerService.getOwnerByCarId(orderRequestDto.getCarId());
        ownerService.create(ownerService.addOrder(owner.getId(), order));
        return orderMapper.mapToDto(order);
    }

    @PostMapping("/{orderId}/goods")
    @ResponseStatus(HttpStatus.CREATED)
    public OrderResponseDto addGoods(@PathVariable Long orderId,
                                     @Valid @RequestBody GoodsRequestDto goodsRequestDto) {
        return orderMapper
                .mapToDto(orderService
                        .create(orderService
                                .addGoods(orderId, goodsMapper.mapToModel(goodsRequestDto))));
    }

    @PostMapping("/{orderId}/favors")
    @ResponseStatus(HttpStatus.CREATED)
    public OrderResponseDto addFavor(@PathVariable Long orderId,
                                     @Valid @RequestBody FavorRequestDto favorRequestDto) {
        return orderMapper
                .mapToDto(orderService
                        .create(orderService
                                .addFavor(orderId, favorMapper.mapToModel(favorRequestDto))));
    }

    @PostMapping("/{order_id}/goods/{goods_id}")
    @ResponseStatus(HttpStatus.CREATED)
    public OrderResponseDto addGoodsById(@PathVariable Long order_id,
                                         @PathVariable Long goods_id) {
        return orderMapper.mapToDto(orderService.addGoodsById(order_id, goods_id));
    }

    @PostMapping("/{order_id}/favors/{favor_id}")
    @ResponseStatus(HttpStatus.CREATED)
    public OrderResponseDto addFavorById(@PathVariable Long order_id,
                                         @PathVariable Long favor_id) {
        return orderMapper.mapToDto(orderService.addFavorById(order_id, favor_id));
    }

    @PutMapping("/{id}")
    public OrderResponseDto updateOrder(@PathVariable Long id,
                                      @Valid @RequestBody OrderRequestDto orderRequestDto) {
        Order order = orderMapper.mapToModel(orderRequestDto);
        order.setId(id);
        return orderMapper.mapToDto(orderService.create(order));
    }

    @PutMapping("/{id}/status")
    public OrderResponseDto updateOrderStatus(@PathVariable Long id,
                                              @RequestParam String newStatus) {
        return orderMapper
                .mapToDto(statusService
                        .changeOrderStatus(id, Order.Status.valueOf(newStatus)));
    }

    @GetMapping("/{id}/price")
    public BigDecimal getOrderPrice(@PathVariable Long id, @RequestParam Integer bonus) {
        return orderService.setFinalPrice(id, bonus);
    }
}
