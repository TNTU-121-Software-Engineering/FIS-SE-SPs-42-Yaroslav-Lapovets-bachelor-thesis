package autoservice.model;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "favors")
public class Favor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Order order;
    @ManyToOne
    private Repairman repairman;
    @Column(name = "favor_name")
    private String favorName;
    private BigDecimal price;
    @Enumerated(EnumType.STRING)
    private Status status;

    public Favor() {
    }

    public enum Status {
        PAID,
        NOT_PAID
    }

    public Favor(Status status) {
        this.status = status;
    }

    public Favor setStatus(Status status) {
        this.status = status;
        return this;
    }
}
