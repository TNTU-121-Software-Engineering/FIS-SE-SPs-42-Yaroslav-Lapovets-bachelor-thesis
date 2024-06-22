package autoservice.dto.request;

import java.math.BigDecimal;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

import lombok.Data;

@Data
public class GoodsRequestDto {
    @NotNull
    private Integer orderId;
    @NotNull
    private String name;
    @NotNull
    private BigDecimal price;
}
