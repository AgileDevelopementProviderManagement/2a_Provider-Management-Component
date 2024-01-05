package com.frauas.agile_development.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.frauas.agile_development.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

}
