package springbootjpaweb.data.config.listener;

import lombok.extern.slf4j.Slf4j;
import org.springframework.util.Assert;
import org.springframework.util.ReflectionUtils;
import springbootjpaweb.data.domain.GenerateKey;

import javax.persistence.PrePersist;

@Slf4j
public class GenerateKeyEntityListener {

    @PrePersist
    public void touchForCreate(Object target) {
        Assert.notNull(target, "Entity must not be null!");
        ReflectionUtils.doWithFields(target.getClass(), field -> {
            GenerateKey generateKey = field.getAnnotation(GenerateKey.class);
            if (generateKey == null) {
                return;
            }
            Assert.isAssignable(String.class, field.getType(), "@GenerateKey 의 타입은 String.class 만 가능합니다.");
            if (!field.isAccessible()) {
                field.setAccessible(true);
            }
            if (field.get(target) == null) {
                field.set(target, generateKey.value().generate());
            }
        });
    }
}
