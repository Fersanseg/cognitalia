-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 10-05-2022 a las 19:49:48
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cognitalia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cg_results`
--

DROP TABLE IF EXISTS `cg_results`;
CREATE TABLE IF NOT EXISTS `cg_results` (
  `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `test` varchar(50) NOT NULL DEFAULT '',
  `score` varchar(25) NOT NULL DEFAULT '---',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cg_results`
--

INSERT INTO `cg_results` (`id`, `test`, `score`) VALUES
(1, 'Reaction time', '---'),
(2, 'Number memory', '---'),
(3, 'Verbal memory', '---'),
(4, 'Visual memory', '---'),
(5, 'Typing speed', '---'),
(6, 'Stroop test', '---');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cg_tests`
--

DROP TABLE IF EXISTS `cg_tests`;
CREATE TABLE IF NOT EXISTS `cg_tests` (
  `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL DEFAULT '',
  `subtitle` varchar(255) NOT NULL DEFAULT '',
  `description` varchar(2000) NOT NULL DEFAULT '',
  `icon1` varchar(50) DEFAULT '',
  `icon2` varchar(50) DEFAULT '',
  `icon3` varchar(50) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cg_tests`
--
INSERT INTO `cg_tests` (`id`, `title`, `subtitle`, `description`, `icon1`, `icon2`, `icon3`) VALUES
(1, 'Reaction time', 'Measure your reflexes', '<h3>How quickly do you think you can react to a stimulus?</h3><p>In this test, you will need to closely observe your screen and click in the test area as quickly as you can once the red box turns green. But be careful: if you click too soon, that attempt will be discarded.</p><p>The test measures the time from the point the stimulus happens, until your brain proccesses it, sends the signal to click to your hand, and your muscles react.</p><p>The fastest reaction time ever recorded is 120ms, whereas the average time is around 250ms, and its not rare to get a bit less than 200ms or a bit more than 300ms. Remember: the lower the time, the better. It means you can react faster.</p>', './assets/clock-regular.svg', NULL, NULL),
(2, 'Number memory', 'See how many digits you can remember at once', '<h3>How many digits can you remember at once?</h3><p>In this test, you will need to memorize a number that you will see for a few seconds, and then you will have to type it. If you get it correctly, the next number will have one extra digit, and the test will finish once you input an incorrect number.</p><p>The average human can remember numbers of around 7 digits, but some people know mnemotecnics that help them perform better in these kinds of tasks. Do you think you can beat that number?', './assets/1-solid.svg', './assets/2-solid.svg', './assets/3-solid.svg'),
(3, 'Verbal memory', 'Remember the highest amount of words possible', '', './assets/h-solid.svg', './assets/i-solid.svg', './assets/exclamation-solid.svg'),
(4, 'Visual memory', 'Remember a checkered board that gets progressively bigger', '', './assets/table-cells-solid.svg', NULL, NULL),
(5, 'Typing speed', 'Measure how many words per minute you can type', '', './assets/keyboard-solid.svg', NULL, NULL),
(6, 'Stroop test', 'See if you can successfully ignore conflictive stimuli', '', './assets/palette-solid.svg', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cg_users`
--

DROP TABLE IF EXISTS `cg_users`;
CREATE TABLE IF NOT EXISTS `cg_users` (
  `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cg_users`
--

INSERT INTO `cg_users` (`id`, `email`, `password`, `username`) VALUES
(35, 'usuario@prueba.com', '$argon2id$v=19$m=2048,t=4,p=1$TEc2dVFuQ3ozZzJlYXpmNQ$5ab2hCn6MWxh/ketkYgp/RPqStFqapVbErveR5iCfRs', 'pruebas'),
(37, 'fer_ssa94@hotmail.com', '$argon2id$v=19$m=2048,t=4,p=1$Y3ZnLzFRb1RFbmJxUFJBbg$7YLnHn1XKRTrqI7WgpvqQu1USQt/ee/yg2H8anC1i5Y', 'Fernando');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
