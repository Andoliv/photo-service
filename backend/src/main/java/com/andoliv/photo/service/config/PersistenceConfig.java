package com.andoliv.photo.service.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * The Persistence Config class is responsible to enable all service of jpa
 *
 * @author anderson
 */
@Configuration
@EnableTransactionManagement
@EnableJpaRepositories("com.andoliv.photo.service.repository")
@EnableJpaAuditing
public class PersistenceConfig {

}
