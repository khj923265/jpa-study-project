package springbootjpaweb.domain.product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.envers.Audited;
import org.hibernate.envers.NotAudited;
import springbootjpaweb.domain.category.CategoryProduct;
import springbootjpaweb.domain.order.OrderProduct;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@Table(name = "tn_product")
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "price")
    private int price;

    @Column(name = "img_path")
    private String imgPath;

    @Column(name = "category")
    private String category;

    @Column(name = "stock")
    private int stock;

//    @OneToMany(mappedBy = "product")
//    private List<CategoryProduct> categoryProducts = new ArrayList<>();
//
//    @OneToMany(mappedBy = "product")
//    private List<OrderProduct> orderProducts = new ArrayList<>();

}
