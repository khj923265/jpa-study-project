package springbootjpaweb.domain.banner;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@Builder
@Table(name = "mainbanner_imgfile")
@NoArgsConstructor
@AllArgsConstructor
public class Banner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "img_path")
    private String img_path;

    @Column(name = "title")
    private String title;

    @Column(name = "subtitle")
    private String  subtitle;
}
