
insert into ad (ad_id, description, url_image, value)
values (1, 'Nootbook intel i7', 'https://a-static.mlcdn.com.br/618x463/notebook-lenovo-ideapad-320-intel-celeron-n3350-4gb-1tb-led-156-windows-10/magazineluiza/218313700/ede357e0d01c0b9c8c4a60fe533526fa.jpg', 1600)
,(2, 'Celta life 4p 2008', 'https://img.olx.com.br/images/64/644821037823977.jpg', 12000)
,(3, 'Tv samsung 42 polegagas em ótimo estado', 'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/8806088790473_4.jpg', 850)
,(4, 'Playstation 4 - 2 anos de uso', 'https://s2.glbimg.com/kVWErTnOwfao3Iq9PmqWKo7d8I4=/0x600/s.glbimg.com/po/tt2/f/original/2015/10/30/playstation-4-funcionalidades-melhores-xbox-one.jpg', 700)
,(5, 'Poltrona do papai super confortável', 'https://img1.madeiramadeira.com.br/prd/imperio-estofados/192108/poltrona-do-papai-reclin-vel-gelo-198_desc.jpg', 680);

insert into product (product_id, description, value, ad_id)
values
(1, 'Produto A', 1000, 1),
(2, 'Produto B', 1000, 1),
(3, 'Produto C', 1000, 1),
(4, 'Produto D', 1000, 1),
(5, 'Produto E', 1000, 1),
(6, 'Produto F', 1000, 2),
(7, 'Produto G', 1000, 2),
(8, 'Produto H', 1000, 2),
(9, 'Produto I', 1000, 2),
(10, 'Produto J', 1000, 2),
(11, 'Produto L', 1000, 2),
(12, 'Produto M', 1000, 3),
(13, 'Produto N', 1000, 3),
(14, 'Produto O', 1000, 4),
(15, 'Produto P', 1000, 5),
(16, 'Produto Q', 1000, 5),
(17, 'Produto R', 1000, 5),
(18, 'Produto S', 1000, 5),
(19, 'Produto T', 1000, 5),
(20, 'Produto U', 1000, 5);


insert into address (address_id, city, country, state, street)
values (1, 0, 1, 1, 'Rua A');

insert into user_ad (user_id, dt_age, full_name, nick_name, gender, address_id)
values
(1, '1989-04-20', 'Hugo Fernando da Mota', 'iguana', 0, 1),
(2, '1990-01-11', 'Aline Lúcia Silva dos Santos', 'aline', 1, 1);
