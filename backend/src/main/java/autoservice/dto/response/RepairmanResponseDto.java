package autoservice.dto.response;

import java.util.List;
import lombok.Data;

@Data
public class RepairmanResponseDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private List<OrderResponseDto> completedOrders;

}
