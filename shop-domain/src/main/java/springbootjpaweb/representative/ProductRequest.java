package springbootjpaweb.representative;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {
    private Long id;
    private String title;
    private int price;
    private String imgPath;
    private String category;
    private int stock;
}
