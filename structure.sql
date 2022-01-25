-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mercampo_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mercampo_db
-- -----------------------------------------------------
DROP DATABASE IF EXISTS `mercampo_db`;
CREATE SCHEMA IF NOT EXISTS `mercampo_db` DEFAULT CHARACTER SET utf8 ;
USE `mercampo_db` ;

-- -----------------------------------------------------
-- Table `mercampo_db`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mercampo_db`.`roles` (
  `idroles` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idroles`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mercampo_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mercampo_db`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `roles_idroles` INT NOT NULL,
  PRIMARY KEY (`idusers`),
  INDEX `fk_users_roles1_idx` (`roles_idroles` ASC) ,
  CONSTRAINT `fk_users_roles1`
    FOREIGN KEY (`roles_idroles`)
    REFERENCES `mercampo_db`.`roles` (`idroles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mercampo_db`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mercampo_db`.`categories` (
  `idcategories` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategories`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mercampo_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mercampo_db`.`products` (
  `idproducts` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(300) NOT NULL,
  `price` INT NOT NULL,
  `categories_idcategories` INT NOT NULL,
  PRIMARY KEY (`idproducts`),
  INDEX `fk_products_categories1_idx` (`categories_idcategories` ASC) ,
  CONSTRAINT `fk_products_categories1`
    FOREIGN KEY (`categories_idcategories`)
    REFERENCES `mercampo_db`.`categories` (`idcategories`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mercampo_db`.`shopping_carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mercampo_db`.`shopping_carts` (
  `idshopping_carts` INT NOT NULL AUTO_INCREMENT,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idshopping_carts`),
  INDEX `fk_shopping_carts_users1_idx` (`users_idusers` ASC) ,
  CONSTRAINT `fk_shopping_carts_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `mercampo_db`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mercampo_db`.`products_has_shopping_carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mercampo_db`.`products_has_shopping_carts` (
  `products_idproducts` INT NOT NULL,
  `shopping_carts_idshopping_carts` INT NOT NULL,
  PRIMARY KEY (`products_idproducts`, `shopping_carts_idshopping_carts`),
  INDEX `fk_products_has_shopping_carts_shopping_carts1_idx` (`shopping_carts_idshopping_carts` ASC) VISIBLE,
  INDEX `fk_products_has_shopping_carts_products1_idx` (`products_idproducts` ASC) ,
  CONSTRAINT `fk_products_has_shopping_carts_products1`
    FOREIGN KEY (`products_idproducts`)
    REFERENCES `mercampo_db`.`products` (`idproducts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_has_shopping_carts_shopping_carts1`
    FOREIGN KEY (`shopping_carts_idshopping_carts`)
    REFERENCES `mercampo_db`.`shopping_carts` (`idshopping_carts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mercampo_db`.`users_has_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mercampo_db`.`users_has_products` (
  `users_idusers` INT NOT NULL,
  `products_idproducts` INT NOT NULL,
  PRIMARY KEY (`users_idusers`, `products_idproducts`),
  INDEX `fk_users_has_products_products1_idx` (`products_idproducts` ASC) ,
  INDEX `fk_users_has_products_users1_idx` (`users_idusers` ASC) ,
  CONSTRAINT `fk_users_has_products_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `mercampo_db`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_products_products1`
    FOREIGN KEY (`products_idproducts`)
    REFERENCES `mercampo_db`.`products` (`idproducts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
