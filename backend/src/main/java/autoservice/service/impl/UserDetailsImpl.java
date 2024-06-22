package autoservice.service.impl;

import java.util.*;
import java.util.stream.Collectors;

import autoservice.model.User;
import org.springframework.security.core.userdetails.UserDetails;
 
public class UserDetailsImpl implements UserDetails {
 
    private final User user;
     
    public UserDetailsImpl(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends org.springframework.security.core.GrantedAuthority> getAuthorities() {
        return user.getRoles().stream()
                .map(role ->
                        new org.springframework.security.core.authority.SimpleGrantedAuthority(
                                "ROLE_" + role.getName()))
                .collect(Collectors.toSet());
    }
 
    @Override
    public String getPassword() {
        return user.getPassword();
    }
 
    @Override
    public String getUsername() {
        return user.getUsername();
    }
 
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
 
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
 
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
 
    @Override
    public boolean isEnabled() {
        return user.isEnabled();
    }
 
}