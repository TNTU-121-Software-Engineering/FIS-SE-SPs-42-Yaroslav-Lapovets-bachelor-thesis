package autoservice.dto.response;

import java.util.List;
import lombok.Data;

@Data
public class OwnerResponseDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private String address;
    private List<CarResponseDto> cars;
    private List<OrderResponseDto> orders;
}
