const pnList = `Артикул;Кол-во;Мощ-ть, кВА;Описание;Высота (мм);Ширина (мм);Глубина (мм);Вес, кг;ERP USD c НДС;Rslope;Scal;Expo;Cap;Volt
U3MUPS60KH;1;60;UPS Unirpom 3M 60kVA 400V 3:3;915;360;850;109;40732;;;;;
U3MUPS80KH;1;80;UPS Uniprom 3M 80kVA 400V 3:3;915;360;850;140;48875;;;;;
U3MUPS100KH;1;100;UPS Uniprom 3M 100kVA 400V 3:3;915;360;850;145;54876;;;;;
U3MUPS120KH;1;120;UPS Uniprom 3M 120kVA 400V 3:3;1300;500;850;193;62594;;;;;
U3MUPS160KH;1;160;UPS Uniprom 3M 160kVA 400V 3:3;1300;500;850;227;78013;;;;;
U3MUPS200KH;1;200;UPS Uniprom 3M 200kVA 400V 3:3;1300;500;850;304;93449;;;;;
U3MUPS60KHB;1;60;UPS Uniprom 3M 60kVA 400V 3:3, под модульные бат.;1970;600;1000;311;44795;;;;;
U3MUPS80KHB;1;80;UPS Uniprom 3M 80kVA 400V 3:3, под модульные бат.;1970;600;1000;339;53754;;;;;
U3LUPS250KH;1;250;UPS Uniprom 3L 250kVa 400V 3:3;1970;600;850;425;168742;;;;;
U3LUPS300KH;1;300;UPS Uniprom 3L 300kVa 400V 3:3;1970;600;850;449;189941;;;;;
U3LUPS400KH;1;400;UPS Uniprom 3L 400kVa 400V 3:3;1970;600;850;538;232917;;;;;
U3LUPS500KH;1;500;UPS Uniprom 3L 500kVa 400V 3:3;1970;1000;850;640;277151;;;;;
U3LUPS600KH;1;600;UPS Uniprom 3L 600kVa 400V 3:3;1970;1000;850;720;323255;;;;;
U3MBP60K400H;1;400;Механический байпас на 400kVA , до 4х ИБП;;;;;16133;;;;;
U3MBPAR60K200H;1;200;360kVA without neutral bypass (TNS);;;;;13226;;;;;
U3LMBPAR400K1200H;1;1200;Механический байпас на 1200kVA, до 2х ИБП;;;;;54883,2;;;;;
U3LMBPAR500K1800H;1;1800;Механический байпас на 1800kVA , до 3х ИБП;;;;;59188,8;;;;;
BC1100;1;;Шкаф батарейный стандартный;2000;1100;800;236;11 390;;;;;
BC900;1;;Шкаф батарейный узкий;1800;900;725;170;9 503;;;;;
R4N2117513AT;1;~;Стеллаж батарейный 4 уровня 2 ряда, длина 1.1м;1390;1152;758;84;1 972;;;;;
R4N2978214AT;1;~;Стеллаж батарейный 4 уровня 2 ряда, длина 0.97м;1465;975;825;65;1 752;;;;;
R6N2997121AT;1;~;Стеллаж батарейный 6 уровней 2 ряда, длина 0.99м;2190;995;775;121;2 918;;;;;
U3MBBB100K200H;1;200;Шкаф защиты батарей настенный;;;;;6 766;;;;;
U3MBBB60K80H;1;80;Шкаф защиты батарей настенный;;;;;4 522;;;;;
U3MBBK100K200H;1;200;Встраиваемый набор защиты батарей;;;;;4 760;;;;;
U3MBBK60K80H;1;80;Встраиваемый набор защиты батарей;;;;;2 958;;;;;
U3LNMC;1;~;Сетевая карта для Uniprom 3M/3L;~;~;~;~0.1;1081,2;;;;;
U3LRELAY;1;~;Плата сухих контактов для Uniprom 3M/3L;~;~;~;~0.1;340;;;;;
U3LOPT001;1;~;Комплект параллельной работы для Uniprom 3L;~;~;~;~0.1;1013,2;;;;;
U3MOPT001;1;~;Комплект параллельной работы для Uniprom 3M;~;~;~;~0.1;771,8;;;;;
U3MOPT005;1;~;Набор холодного старта для Uniprom 3M/3L;~;~;~;~0.1;605,2;;;;;
U3MTEMPSENS;1;~;Датчик термокомпенсации заряда батарей;~;~;~;~0.1;102;;;;;
BATWIRESET;1;~;Комплект батарейных перемычек для 1 линейки батарей;~;~;~;~;2284,8;;;;;
LIBVIS8X100630IEC;1;~;Li-ION шкаф с 8 LFP модулями 100Ач, 630А автомат;2000;600;1000;722;181747;;;;;
LIBVIS8X50250IEC;1;~;Li-ION шкаф с 8 LFP модулями 50Ач, 250А автомат;2000;600;1000;433;96985;;;;;
LIBVIS10X100630IEC;1;~;Li-ION шкаф с 10 LFP модулями 100Ач, 630А автомат;2000;600;1000;862;215441;;;;;
LIBVIS10X50250IEC;1;~;Li-ION шкаф с 10 LFP модулями 50Ач, 250А автомат;2000;600;1000;505;114529;;;;;
LIBVIS12X100630IEC;1;~;Li-ION шкаф с 12 LFP модулями 100Ач, 630А автомат;2300;600;1000;1016;250427;;;;;
LIBVIS12X50250IEC;1;~;Li-ION шкаф с 12 LFP модулями 50Ач, 250А автомат;2300;600;1000;577;132073;;;;;
LIBVISGBMS;1;;Основной модуль мониторинга Li-Ion батарей;66;300;176;2,2;7599;;;;;
HF12-135W-X;1;;Батарея свинцово-кислотная, 24Ач, 10 лет;125;115;166;8,6;465,8;0,096;0,684;1,167;24,600;12
HF12-211W-X;1;;Батарея свинцово-кислотная, 45Ач, 10 лет;170;166;198;14,8;618,8;0,094;0,575;1,213;45,000;12
HF12-260W-X;1;;Батарея свинцово-кислотная, 55Ач, 10 лет;208;138;229;17,2;1101,6;0,087;0,601;1,333;55,000;12
HFS12-320W-X;1;;Батарея свинцово-кислотная, 75Ач, 12 лет;210;166;258;24,5;1115,2;0,152;0,882;1,121;75,000;12
HFS12-400W-X;1;;Батарея свинцово-кислотная, 90Ач, 12 лет;220;170;306;29,2;1264,8;0,212;0,845;0,941;94,000;12
HFS12-420W-X;1;;Батарея свинцово-кислотная, 100Ач, 12 лет;213;172;329;32,3;1642,2;0,242;0,870;0,889;100,000;12
HFS12-620W-X;1;;Батарея свинцово-кислотная, 150Ач, 12 лет;279;173;341;45,1;1741,428571;0,331;0,880;0,866;170,000;12
WPL26-12N;1;;Батарея свинцово-кислотная, 24Ач, 12 лет;125;175;166;9,3;465,8;0,000;0,519;1,361;24,700;12
WPL40-12N;1;;Батарея свинцово-кислотная, 38Ач, 12 лет;171;166;199;13,4;618,8;0,240;0,972;1,030;38,000;12
WXL12205WN;1;;Батарея свинцово-кислотная, 43Ач, 6-9 лет;207;135;226;17;1101,6;0,000;0,584;1,263;55,000;12
WXL12300WN;1;;Батарея свинцово-кислотная, 75Ач, 12 лет;202;170;260;24,2;1115,2;0,000;0,480;1,337;75,000;12
WXL12365WN;1;;Батарея свинцово-кислотная, 95Ач, 12 лет;213;168;306;29,5;1264,8;0,000;0,516;1,236;95,000;12
WXL12400WN;1;;Батарея свинцово-кислотная, 100Ач, 12 лет;215;171;341;34;1642,2;0,143;0,776;1,131;100,000;12
WXL12550WN;1;;Батарея свинцово-кислотная, 140Ач, 12 лет;276;173;338;45;1452,45;0,086;0,621;1,131;140,000;12
HRL12-155W;1;;Батарея свинцово-кислотная, 28Ач, 12 лет;175;125;165;9,5;515,04;0,041;0,679;1,342;28,000;12
HRL12-170W;1;;Батарея свинцово-кислотная, 33Ач, 12 лет;155;130;195;11,5;657,12;0,122;0,917;1,088;33,000;12
HRL12-350W;1;;Батарея свинцово-кислотная, 75Ач, 12 лет;210;166;258;24,5;1236,54;0,146;0,883;1,094;75,000;12
HRL12-370W;1;;Батарея свинцово-кислотная, 80Ач, 12 лет;179;167;350;26,2;1252,08;0,129;0,661;1,188;80,000;12
HRL12-460W;1;;Батарея свинцово-кислотная, 90Ач, 12 лет;220;170;306;28,5;1312,02;0,183;0,884;0,974;90,000;12
HRL12-480W;1;;Батарея свинцово-кислотная, 100Ач, 12 лет;215;173;330;32;1520,7;0,156;0,788;1,048;100,000;12
HRL12-570W;1;;Батарея свинцово-кислотная, 120Ач, 12 лет;224;176;410;36,5;1718,28;0,158;0,806;1,085;120,000;12
WSTRTUP5x8-UPS-60K;1;60;Пусконаладка ИБП  60кВА, 5x8;~;~;~;~;2981,8;;;;;
WSTRTUP5x8-UPS-80-120K;1;80-120;Пусконаладка ИБП  80кВА-120кВА, 5x8;~;~;~;~;3165,4;;;;;
WSTRTUP5x8-UPS-160-200K;1;160-200;Пусконаладка ИБП 160кВА-200кВА, 5x8;~;~;~;~;3230;;;;;
WSTRTUP5x8-UPS-250K;1;250;Пусконаладка ИБП 250кВА, 5x8;~;~;~;~;5015;;;;;
WSTRTUP5x8-UPS-300K;1;300;Пусконаладка ИБП 300кВА, 5x8;~;~;~;~;5287;;;;;
WSTRTUP5x8-UPS-400K;1;400;Пусконаладка ИБП 400кВА, 5x8;~;~;~;~;5457;;;;;
WSTRTUP5x8-UPS-500K;1;500;Пусконаладка ИБП 500кВА, 5x8;~;~;~;~;5746;;;;;
WSTRTUP5x8-UPS-600K;1;600;Пусконаладка ИБП 600кВА, 5x8;~;~;~;~;6307;;;;;
WUPGSRV7x24-UPS-41-150K;1;41-150;Апгрейд сервиса 5x8 до сервиса 7x24 для ИБП 41-150кВА;~;~;~;~;1931,2;;;;;
WUPGSRV7x24-UPS-151-500K;1;151-500;Апгрейд сервиса 5x8 до сервиса 7x24 для ИБП 151-500кВА;~;~;~;~;2298,4;;;;;
WUPGSRV7x24-UPS-501K;1;501+;Апгрейд сервиса 5x8 до сервиса 7x24 для ИБП 501кВА и выше;~;~;~;~;2631,6;;;;;
WEXTWAR1Y-UPS-60K;1;60;Продление гарантии на ИБП 60кВА на 1 год;~;~;~;~;6409;;;;;
WEXTWAR1Y-UPS-80-120K;1;80-120;Продление гарантии на ИБП 80кВА-120кВА на 1 год;~;~;~;~;6851;;;;;
WEXTWAR1Y-UPS-160-200K;1;160-200;Продление гарантии на ИБП 160кВА-200кВА на 1 год;~;~;~;~;7310;;;;;
WEXTWAR1Y-UPS-250K;1;250;Продление гарантии на ИБП 250кВАна 1 год;~;~;~;~;11271;;;;;
WEXTWAR1Y-UPS-300K;1;300;Продление гарантии на ИБП 300кВАна 1 год;~;~;~;~;12869;;;;;
WEXTWAR1Y-UPS-400K;1;400;Продление гарантии на ИБП 400кВАна 1 год;~;~;~;~;15742;;;;;
WEXTWAR1Y-UPS-500K;1;500;Продление гарантии на ИБП 500кВАна 1 год;~;~;~;~;18768;;;;;
WEXTWAR1Y-UPS-600K;1;600;Продление гарантии на ИБП 600кВАна 1 год;~;~;~;~;20366;;;;;
WASSEM5x8-LI-1R;1;~;Сборка (1) шкафа Li-ION батарей, 5x8;~;~;~;~;3192,6;;;;;
WASSEM5x8-LI-2R;1;~;Сборка (2) шкафов Li-ION батарей, 5x8;~;~;~;~;4063;;;;;
WASSEM5x8-LI-3R;1;~;Сборка (3) шкафов Li-ION батарей, 5x8;~;~;~;~;4726;;;;;
WASSEM5x8-LI-4R;1;~;Сборка (4) шкафов Li-ION батарей, 5x8;~;~;~;~;5491;;;;;
WASSEM5x8-LI-5R;1;~;Сборка (5) шкафов Li-ION батарей, 5x8;~;~;~;~;6256;;;;;
WASSEM5x8-LI-6R;1;~;Сборка (6) шкафов Li-ION батарей, 5x8;~;~;~;~;7463;;;;;
WASSEM5x8-LI-7R;1;~;Сборка (7) шкафов Li-ION батарей, 5x8;~;~;~;~;8296;;;;;
WASSEM5x8-LI-8R;1;~;Сборка (8) шкафов Li-ION батарей, 5x8;~;~;~;~;9163;;;;;
WASSEM5x8-LI-9R;1;~;Сборка (9) шкафов Li-ION батарей, 5x8;~;~;~;~;12750;;;;;
WASSEM5x8-LI-10R;1;~;Сборка (10) шкафов Li-ION батарей, 5x8;~;~;~;~;11407;;;;;
WASSEM5x8-LI-11R;1;~;Сборка (11) шкафов Li-ION батарей, 5x8;~;~;~;~;15300;;;;;
WASSEM5x8-LI-12R;1;~;Сборка (12) шкафов Li-ION батарей, 5x8;~;~;~;~;13243;;;;;
WASSEM5x8-LI-13R;1;~;Сборка (13) шкафов Li-ION батарей, 5x8;~;~;~;~;15232;;;;;
WASSEM5x8-LI-14R;1;~;Сборка (14) шкафов Li-ION батарей, 5x8;~;~;~;~;18122;;;;;
WASSEM5x8-LI-15R;1;~;Сборка (15) шкафов Li-ION батарей, 5x8;~;~;~;~;23273;;;;;
WASSEM5x8-LI-16R;1;~;Сборка (16) шкафов Li-ION батарей, 5x8;~;~;~;~;20502;;;;;
WSTRTUP5x8-LI-1R;1;~;Пусконаладка (1) шкафа Li-ION батарей, 5x8;~;~;~;~;3250,4;;;;;
WSTRTUP5x8-LI-2R;1;~;Пусконаладка (2) шкафов Li-ION батарей, 5x8;~;~;~;~;3570;;;;;
WSTRTUP5x8-LI-3R;1;~;Пусконаладка (3) шкафов Li-ION батарей, 5x8;~;~;~;~;3893;;;;;
WSTRTUP5x8-LI-4R;1;~;Пусконаладка (4) шкафов Li-ION батарей, 5x8;~;~;~;~;4267;;;;;
WSTRTUP5x8-LI-5R;1;~;Пусконаладка (5) шкафов Li-ION батарей, 5x8;~;~;~;~;4879;;;;;
WSTRTUP5x8-LI-6R;1;~;Пусконаладка (6) шкафов Li-ION батарей, 5x8;~;~;~;~;5287;;;;;
WSTRTUP5x8-LI-7R;1;~;Пусконаладка (7) шкафов Li-ION батарей, 5x8;~;~;~;~;5695;;;;;
WSTRTUP5x8-LI-8R;1;~;Пусконаладка (8) шкафов Li-ION батарей, 5x8;~;~;~;~;6120;;;;;
WSTRTUP5x8-LI-9R;1;~;Пусконаладка (9) шкафов Li-ION батарей, 5x8;~;~;~;~;8143;;;;;
WSTRTUP5x8-LI-10R;1;~;Пусконаладка (10) шкафов Li-ION батарей, 5x8;~;~;~;~;7004;;;;;
WSTRTUP5x8-LI-11R;1;~;Пусконаладка (11) шкафов Li-ION батарей, 5x8;~;~;~;~;9248;;;;;
WSTRTUP5x8-LI-12R;1;~;Пусконаладка (12) шкафов Li-ION батарей, 5x8;~;~;~;~;7888;;;;;
WSTRTUP5x8-LI-13R;1;~;Пусконаладка (13) шкафов Li-ION батарей, 5x8;~;~;~;~;8058;;;;;
WSTRTUP5x8-LI-14R;1;~;Пусконаладка (14) шкафов Li-ION батарей, 5x8;~;~;~;~;9265;;;;;
WSTRTUP5x8-LI-15R;1;~;Пусконаладка (15) шкафов Li-ION батарей, 5x8;~;~;~;~;11305;;;;;
WSTRTUP5x8-LI-16R;1;~;Пусконаладка (16) шкафов Li-ION батарей, 5x8;~;~;~;~;10149;;;;;
`;

export default pnList;