package autoservice.dto.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import lombok.Data;

@Data
public class OwnerRequestDto {
    @NotNull
    private String lastName;
    @NotNull
    private String firstName;
    @NotNull
    private String phone;
    @NotNull
    @Email
    private String email;

}
