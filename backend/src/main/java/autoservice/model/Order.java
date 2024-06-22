package autoservice.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Car car;
    @Column(name = "problem_description")
    private String problemDescription;
    @CreatedDate
    @Column(name = "acceptance_date")
    private LocalDateTime acceptanceDate;
    @OneToMany(mappedBy = "order")
    private List<Favor> favors;
    @ManyToMany
    @JoinTable(
            name = "orders_goods",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "goods_id"))
    private List<Goods> goods;
    @Enumerated(EnumType.STRING)
    private Status status;
    @Column(name = "final_price")
    private BigDecimal finalPrice;
    @Column(name = "end_date")
    private LocalDateTime endDate;

    public Order() {
    }

    public enum Status {
        IN_PROCESS,
        ACCEPTED,
        COMPLETED,
        FAILURE,
        PAID
    }

    public Order(Status status) {
        favors = new ArrayList<>();
        goods = new ArrayList<>();
        this.status = status;
    }

}

