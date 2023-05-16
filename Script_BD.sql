-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema portfolioAP
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema portfolioAP
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `portfolioAP` DEFAULT CHARACTER SET utf8 ;
USE `portfolioAP` ;

-- -----------------------------------------------------
-- Table `portfolioAP`.`login_usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolioAP`.`login_usuarios` (
  `login_usuario_id` INT NOT NULL,
  `email` VARCHAR(80) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`login_usuario_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolioAP`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolioAP`.`usuarios` (
  `usuario_id` INT NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `titulo` VARCHAR(255) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `foto` VARCHAR(255) NULL,
  `login_usuarios_login_usuario_id` INT NOT NULL,
  PRIMARY KEY (`usuario_id`, `login_usuarios_login_usuario_id`),
  INDEX `fk_usuarios_login_usuarios1_idx` (`login_usuarios_login_usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_login_usuarios1`
    FOREIGN KEY (`login_usuarios_login_usuario_id`)
    REFERENCES `portfolioAP`.`login_usuarios` (`login_usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolioAP`.`experiencias_laborales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolioAP`.`experiencias_laborales` (
  `experiencia_laboral_id` INT NOT NULL,
  `titulo` VARCHAR(90) NULL,
  `descripcion` VARCHAR(255) NULL,
  `imagen` VARCHAR(255) NULL,
  `usuarios_usuario_id` INT NOT NULL,
  PRIMARY KEY (`experiencia_laboral_id`, `usuarios_usuario_id`),
  INDEX `fk_experiencias_laborales_usuarios_idx` (`usuarios_usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_experiencias_laborales_usuarios`
    FOREIGN KEY (`usuarios_usuario_id`)
    REFERENCES `portfolioAP`.`usuarios` (`usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolioAP`.`estudios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolioAP`.`estudios` (
  `estudio_id` INT NOT NULL,
  `nivel` VARCHAR(45) NOT NULL,
  `institucion` VARCHAR(45) NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NULL,
  `descripcion` VARCHAR(255) NULL,
  `usuarios_usuario_id` INT NOT NULL,
  PRIMARY KEY (`estudio_id`, `usuarios_usuario_id`),
  INDEX `fk_estudios_usuarios1_idx` (`usuarios_usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_estudios_usuarios1`
    FOREIGN KEY (`usuarios_usuario_id`)
    REFERENCES `portfolioAP`.`usuarios` (`usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolioAP`.`skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolioAP`.`skills` (
  `skill_id` INT NOT NULL,
  `tipo_habilidad` VARCHAR(45) NOT NULL,
  `habilidad` VARCHAR(45) NOT NULL,
  `nivel` INT NULL,
  `usuarios_usuario_id` INT NOT NULL,
  PRIMARY KEY (`skill_id`, `usuarios_usuario_id`),
  INDEX `fk_skills_usuarios1_idx` (`usuarios_usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_skills_usuarios1`
    FOREIGN KEY (`usuarios_usuario_id`)
    REFERENCES `portfolioAP`.`usuarios` (`usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolioAP`.`proyectos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolioAP`.`proyectos` (
  `proyecto_id` INT NOT NULL,
  `titulo` VARCHAR(60) NOT NULL,
  `fecha_inicio` DATE NULL,
  `descripcion` VARCHAR(255) NOT NULL,
  `link` VARCHAR(255) NULL,
  `mascara_link` VARCHAR(45) NULL,
  `usuarios_usuario_id` INT NOT NULL,
  PRIMARY KEY (`proyecto_id`, `usuarios_usuario_id`),
  INDEX `fk_proyectos_usuarios1_idx` (`usuarios_usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_proyectos_usuarios1`
    FOREIGN KEY (`usuarios_usuario_id`)
    REFERENCES `portfolioAP`.`usuarios` (`usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
