package springbootjpaweb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import springbootjpaweb.domain.product.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
}
