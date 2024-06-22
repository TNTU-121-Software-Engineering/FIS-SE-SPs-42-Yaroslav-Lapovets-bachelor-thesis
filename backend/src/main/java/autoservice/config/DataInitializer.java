package autoservice.config;

import autoservice.model.Role;
import autoservice.model.User;
import autoservice.repository.UserRepository;
import autoservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Set;

@Configuration
public class DataInitializer {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Bean
    public CommandLineRunner initData() {
        return args -> {
            if (!userRepository.findByUsername("admin").isPresent()) {
                User admin = new User();
                admin.setUsername("admin");
                admin.setPassword(passwordEncoder.encode("admin"));
                admin.setRoles(Set.of(new Role("ADMIN")));
                userService.saveUser(admin);
                System.out.println("Admin user created with username: admin and password: admin");
            }
            if (!userRepository.findByUsername("user").isPresent()) {
                User admin = new User();
                admin.setUsername("user");
                admin.setPassword(passwordEncoder.encode("user"));
                admin.setRoles(Set.of(new Role("USER")));
                userService.saveUser(admin);
                System.out.println("User created with username: user and password: user");
            }
        };
    }
}
