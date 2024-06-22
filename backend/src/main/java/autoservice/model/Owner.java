package autoservice.model;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "owners")
public class Owner {
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "phone")
    private String phone;
    @Column(name = "email")
    private String email;
    @OneToMany(mappedBy = "owner")

    private List<Car> cars;
    @OneToMany
    @JoinColumn(name = "owner_id")
    private List<Order> orders;

    public Owner() {
        orders = new ArrayList<>();
        cars = new ArrayList<>();
    }
}
