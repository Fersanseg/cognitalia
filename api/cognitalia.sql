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
(1, 'Tiempo de reacción', '---'),
(2, 'Memoria numérica', '---'),
(3, 'Memoria verbal', '---'),
(4, 'Memoria visual', '---'),
(5, 'Velocidad de escritura', '---'),
(6, 'Test de Stroop', '---');

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
(1, 'Tiempo de reacción', 'Mide tus reflejos', '<h3>¿Cómo de rápido crees que eres capaz de reaccionar a un estímulo?</h3><p>En este test tendrás que observar con detenimiento tu pantalla y hacer click en el área del test en cuanto el color rojo cambie a verde, lo más rápido que puedas. Pero ten cuidado: si haces click antes de tiempo, tu prueba quedará anulada.</p><p>La prueba mide el tiempo que transcurre entre que el estímulo ocurre hasta que tu cerebro lo procesa, envía la señal de hacer click a tu mano, y los músculos de tus dedos ejecutan la orden.</p><p>El tiempo de reacción más rápido registrado en la historia es de 120ms, mientras que el tiempo promedio es de alrededor de 250ms, y no es raro obtener algo menos de 200ms o más de 300ms. Recuerda: cuanto menor tiempo, mejor: significa que reaccionas más rápido.</p>', './assets/clock-regular.svg', NULL, NULL),
(2, 'Memoria numérica', 'Comprueba cuántas cifras puedes recordar a la vez', '<h3>¿Cuántas cifras eres capaz de recordar de una vez?</h3><p>En este test tendrás que memorizar un número que se mostrará durante unos segundos, y después tendrás que escribirlo. Cuando aciertes un número, el siguiente tendrá una cifra más, y el test terminará cuando introduzcas un número incorrecto.</p><p>De media, una persona tiende a recordar números de alrededor de 7 cifras, aunque hay quien conoce trucos mnemotécnicos para obtener mejores resultados. ¿Crees que eres capaz de superar esa cifra?</p>', './assets/1-solid.svg', './assets/2-solid.svg', './assets/3-solid.svg'),
(3, 'Memoria verbal', 'Recuerda la mayor cantidad de palabras posible', '', './assets/h-solid.svg', './assets/i-solid.svg', './assets/exclamation-solid.svg'),
(4, 'Memoria visual', 'Recuerda un tablero cada vez más grande', '', './assets/table-cells-solid.svg', NULL, NULL),
(5, 'Velocidad de escritura', 'Mide cuántas palabras puedes escribir por minuto', '', './assets/keyboard-solid.svg', NULL, NULL),
(6, 'Test de Stroop', 'Comprueba si eres capaz de ignorar estímulos conflictivos', '', './assets/palette-solid.svg', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
