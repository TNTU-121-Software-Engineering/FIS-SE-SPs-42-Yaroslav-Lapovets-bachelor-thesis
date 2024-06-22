package autoservice.service;

import autoservice.model.User;

public interface UserService {
    User saveUser(User user);
    boolean existsByUsername(String username);
}
