package org.beta.zon.user.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "user")
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue
    @Column(name = "user_id", unique = true, nullable = false)
    private Long userId;

    @Column(name = "username", unique = true, length = 200, nullable = false)
    private String username;
//    @Column(name = "password", nullable = false)
//    private String password;
//    @Column(name = "name", nullable = false)
//    private String name;
//    @Column(name = "email", nullable = false)
//    private String email;
//    @Column(name = "phone_number", nullable = false)
//    private String phoneNumber;
//    @Column(name = "address", nullable = false)
//    private String address;

}