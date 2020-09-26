//tank and tank bullet
var tank;
var tank_base_image;

//turret
var turret, turret_tier_1, turret_tier_2, turret_tier_3, turret_tier_4, turret_image, turret_tier_1_image, turret_tier_2_image, turret_tier_3_image, turret_tier_4_image;
var double_turret_option, double_turret_option_image;
var dual_missle_turret_option, dual_missle_turret_option_image;
var hexa_turret, hexa_turret_image, hexa_turret_option, hexa_turret_option_image;
var quad_turret_option, quad_turret_option_image;
var quad_turret, quad_turret_image;
var lazer_turret_option, lazer_turret_option_image;
var lazer_turret, lazer_turret_image; 
var buster_turret, buster_turret_image;
var buster_turret_option, buster_turret_option_image;
var sniper_turret_option, sniper_turret_option_image;
var big_turret_option, big_turret_option_image;
var quad_missle_turret_option, quad_missle_turret_option_image;
var rail_gun_turret, rail_gun_turret_MKII, rail_gun_turret_image, rail_gun_turret_MKII_image;
var rail_gun_turret_MKII_option, rail_gun_turret_MKII_option_image;
var plasma_turret_option, plasma_turret_option_image;
var double_turret, double_turret_image;


//ammo
var rail_gun_ammo, rail_gun_ammo_image;
var missle_turret_1_2_missles, missle_turret_2_2_missles, missle_turret_0_4_missles, missle_turret_1_4_missles, missle_turret_2_4_missles, missle_turret_3_4_missles, missle_turret_4_4_missles, missle_turret_2_8_missles, missle_turret_1_8_missles, missle_turret_3_8_missles, missle_turret_4_8_missles, missle_turret_5_8_missles, missle_turret_6_8_missles, missle_turret_7_8_missles, missle_turret_8_8_missles, missle_turret_2_8_missles_image, missle_turret_1_8_missles_image, missle_turret_3_8_missles_image, missle_turret_4_8_missles_image, missle_turret_5_8_missles_image, missle_turret_6_8_missles_image, missle_turret_7_8_missles_image, missle_turret_8_8_missles_image, missle_turret_0_4_missles_image, missle_turret_1_4_missles_image ,missle_turret_2_4_missles_image, missle_turret_3_4_missles_image, missle_turret_4_4_missles_image,  missle_turret_1_2_missles_image, missle_turret_2_2_missles_image;
var rocket_projectile, rocket_projectile_image;
var lazer_bullet, lazer_bullet_image;
var plasma_ammo, plasma_ammo_image;



//rocket booster
var rocket_booster_rear_option, rocket_booster_rear_option_image, rocket_booster_MKII_rear_option, rocket_booster_MKII_rear_option_image;
var rocket_booster_MKII_straight, rocket_booster_MKII_turning_right,  rocket_booster_MKII_turning_left, rocket_booster_MKII_straight_image, rocket_booster_MKII_turning_right_image,  rocket_booster_MKII_turning_left_image;


//tier options
var front_tier_1_option, front_tier_2_option, front_tier_3_option, front_tier_4_option, front_tier_1_option_image, front_tier_2_option_image, front_tier_3_option_image, front_tier_4_option_image;
var secondary_tier_1_option, secondary_tier_2_option, secondary_tier_3_option, secondary_tier_4_option, secondary_tier_1_option_image, secondary_tier_2_option_image, secondary_tier_3_option_image, secondary_tier_4_option_image;
var rear_tier_1_option, rear_tier_2_option, rear_tier_3_option, rear_tier_4_option, rear_tier_1_option_image, rear_tier_2_option_image, rear_tier_3_option_image, rear_tier_4_option_image;

//coins
var blue_triangle, bronze_coin, gold_coin, green_triangle, red_triangle, silver_coin ,blue_triangle_image, bronze_coin_image, gold_coin_image, green_triangle_image, red_triangle_image, silver_coin_image;

//counters
var score, points_player_has, points_player_needs;

//9/17/2020
var rail_gun_turret_option, rail_gun_turret_option_image

//9-18-2020
var tank_mine, tank_mine_image
var secondary_machine_gun, secondary_machine_gun_image

//9-19-2020
var secondary_machine_gun_bullet_image
var secondary_machine_gun_bullet

//9-20-2020
var secondary_missile_4_4, secondary_missile_3_4, secondary_missile_2_4, secondary_missile_1_4, secondary_missile_0_4, secondary_missile_2_2, secondary_missile_1_2, secondary_missile_0_2, secondary_missile_1_1, secondary_missile_0_1, secondary_missile_4_4_image, secondary_missile_3_4_image, secondary_missile_2_4_image, secondary_missile_1_4_image, secondary_missile_0_4_image, secondary_missile_2_2_image, secondary_missile_1_2_image, secondary_missile_0_2_image, secondary_missile_1_1_image, secondary_missile_0_1_image;
var quad_secondary_machine_gun, dual_seconddary_machine_gun, secondary_machine_gun, quad_secondary_machine_gun_image, dual_seconddary_machine_gun_image, secondary_machine_gun_image;

//9-22-2020
var upgrade_turret_decider
var upgrade_big_turret_decider
var upgrade_missle_decider
var upgrade_rail_gun_decider
var dode_turret_option, dode_turret_option_image
var dode_turret, dode_turret_image


function preload(){
  //tank and tank bullet

  tank_base_image = loadImage ("tankbase.png");
  tank_bullet_image = loadImage ("tank_bullet_2.png");

  //turret
  turret_image = loadImage ("turret.png");
  turret_tier_1_image = loadImage ("turret_teir_1.png");
  turret_tier_2_image = loadImage ("turret_teir_2.png");
  turret_tier_3_image = loadImage ("turret_teir_3.png");
  turret_tier_4_image = loadImage ("turret_teir_4.png");
  double_turret_option_image = loadImage ("dual_turret_option.png");
  dual_missle_turret_option_image = loadImage ("dual_missle_turret_option.png");
  hexa_turret_image = loadImage ("hexa_turret.png");
  hexa_turret_option_image = loadImage ("hexa_turret_option.png");
  quad_turret_option_image = loadImage ("Quad_Turret_Turret.png");
  quad_turret_image = loadImage ("quad_turret.png");
  lazer_turret_option_image = loadImage ("lazer_turret_option.png");
  lazer_turret_image = loadImage ("Lazer_Turret.png");
  buster_turret_image = loadImage ("buster_turret.png");
  buster_turret_option_image = loadImage ("buster_turret_option.png");
  sniper_turret_option_image = loadImage ("Sniper_Turret_Turret.png");
  big_turret_option_image = loadImage ("big_turret_option.png");
  rail_gun_turret_image = loadImage ("Rail_Gun_Turret.png");
  rail_gun_turret_MKII_image = loadImage ("Rail_Gun_Turret_MKII.png");
  rail_gun_turret_MKII_option_image = loadImage ("RailGun_Turret_MKII_Turret.png");
  plasma_turret_option_image = loadImage ("Plasma_Turret_Turret.png");
  double_turret_image = loadImage ("double_turret.png");


  //ammo
  rail_gun_ammo_image = loadImage ("Rail_Gun_ammo.png");
  missle_turret_2_8_missles_image = loadImage ("Missle_Turret_2_8_Missles.png");
  missle_turret_1_8_missles_image = loadImage ("Missle_Turret_1_8_Missles.png");
  missle_turret_3_8_missles_image = loadImage ("Missle_Turret_3_8_Missles.png");
  missle_turret_4_8_missles_image = loadImage ("Missle_Turret_4_8_Missles.png");
  missle_turret_5_8_missles_image = loadImage ("Missle_Turret_5_8_Missles.png");
  missle_turret_6_8_missles_image = loadImage ("Missle_Turret_6_8_Missles.png");
  missle_turret_7_8_missles_image = loadImage ("Missle_Turret_7_8_Missles.png");
  missle_turret_8_8_missles_image = loadImage ("Missle_Turret_8_8_Missles.png");
  missle_turret_0_4_missles_image = loadImage ("Missle_Turret_0_4_Missles.png");
  missle_turret_1_4_missles_image = loadImage ("Missle_Turret_1_4_Missle.png");
  missle_turret_2_4_missles_image = loadImage ("Missle_Turret_2_4_Missles.png");
  missle_turret_3_4_missles_image = loadImage ("Missle_Turret_3_4_Missles.png");
  missle_turret_4_4_missles_image = loadImage ("Missle_Turret_4_4_Missles.png");
  missle_turret_1_2_missles_image = loadImage ("Missle_Turret_1_2_Missles.png");
  missle_turret_2_2_missles_image = loadImage ("Missle_Turret_2_2_Missles.png");
  rocket_projectile_image = loadImage ("Rocket_Projectile.png");
  lazer_bullet_image = loadImage ("lazar_bullet.png");
  plasma_ammo_image = loadImage ("plasma_ammo.png");



  //rocket booster
  rocket_booster_rear_option_image = loadImage ("Rocket_Booster_Rear_option.png");
  rocket_booster_MKII_straight_image = loadImage ("Rocket_Booster_MKII_Straight.png");
  rocket_booster_MKII_turning_right_image = loadImage ("Rocket_Booster_MKII_Turning_Right.png");
  rocket_booster_MKII_turning_left_image = loadImage ("Rocket_Booster_MKII_Turning_Left.png");


  //tier options
  front_tier_1_option_image = loadImage ("front_tier_1.png");
  front_tier_2_option_image = loadImage ("front_tier_2.png");
  front_tier_3_option_image = loadImage ("front_tier_3.png");
  front_tier_4_option_image = loadImage ("front_tier_4.png");
  secondary_tier_1_option_image = loadImage ("secondary_tier_1.png");
  secondary_tier_2_option_image = loadImage ("secondary_tier_2.png");
  secondary_tier_3_option_image = loadImage ("secondary_tier_3.png");
  secondary_tier_4_option_image = loadImage ("secondary_tier_4.png");
  rear_tier_1_option_image = loadImage ("rear_tier_1.png");
  rear_tier_2_option_image = loadImage ("rear_tier_2.png");
  rear_tier_3_option_image = loadImage ("rear_tier_3.png");
  rear_tier_4_option_image = loadImage ("rear_tier_4.png");

  //coins
  blue_triangle_image = loadImage("blue_triangle.png");
  bronze_coin_image = loadImage("bronze_coin.png");
  gold_coin_image = loadImage("gold_coin_1.png");
  green_triangle_image = loadImage("green_triangle.png");
  red_triangle_image = loadImage("red_triangle.png");
  silver_coin_image = loadImage("silver_coin.png");

  //9/17/2020  
  rail_gun_turret_option_image = loadImage("Rail_Gun_Turret_Turret.png");
  rocket_booster_MKII_rear_option_image = loadImage("Rocket_Booster_MKII_Rear_option.png")

  quad_missle_turret_option_image = loadImage("Quad_Missle_Turret_Turret.png");

  //9-18-2020
  tank_mine_image = loadImage("Mine_Dropper.png");
  secondary_machine_gun_image = loadImage("secondary_machine_gun.png");

  //9-19-2020
  secondary_machine_gun_bullet_image = loadImage ("secondary_machine_gun_bullet.png");

  //9-20-2020
  secondary_missile_4_4_image = loadImage ("secondary_missile_4_4.png");
  secondary_missile_3_4_image = loadImage ("secondary_missile_3_4.png");
  secondary_missile_2_4_image = loadImage ("secondary_missile_2_4.png");
  secondary_missile_1_4_image = loadImage ("secondary_missile_1_4.png");
  secondary_missile_0_4_image = loadImage ("secondary_missile_0_4.png");
  secondary_missile_2_2_image = loadImage ("secondary_missile_2_2.png");
  secondary_missile_1_2_image = loadImage ("secondary_missile_1_2.png");
  secondary_missile_0_2_image = loadImage ("secondary_missile_0_2.png");
  secondary_missile_1_1_image = loadImage ("secondary_missile_1_1.png");
  secondary_missile_0_1_image = loadImage ("secondary_missile_0_1.png");
  quad_secondary_machine_gun_image = loadImage ("quad_secondary_machine_gun_1.png");
  dual_seconddary_machine_gun_image = loadImage ("dual_secondary_machine_gun.png");
  secondary_machine_gun_image = loadImage ("secondary_machine_gun.png");

  //9-22-2020
  dode_turret_option_image = loadImage ("Dode_Turret_Turret.png");
  dode_turret_image = loadImage ("dode_turret.png");
}

function setup() {
  createCanvas(1900,950);
  
  //tank and tank bullet
  tank = createSprite (200, 200, 10, 10);
  tank.scale = -0.2;

  //turret
  turret = createSprite (20000, 900, 10, 10);
  turret.scale = 0.3

  turret_tier_1 = createSprite (750, 900, 10, 10);
  turret_tier_1.scale = 0.15;
  turret_tier_2 = createSprite (20000, 900, 10, 10);
  turret_tier_2.scale = 0.15;
  turret_tier_3 = createSprite (20000, 900, 10, 10);
  turret_tier_3.scale = 0.15;
  turret_tier_4 = createSprite (20000, 900, 10, 10);
  turret_tier_4.scale = 0.15;
  double_turret_option = createSprite (20000, 900, 10, 10);
  double_turret_option.scale = 0.25;
  dual_missle_turret_option = createSprite (20000, 900, 10, 10);
  dual_missle_turret_option.scale = 0.25;
  hexa_turret = createSprite (20000, 900, 10, 10);
  hexa_turret.scale = 0.3;
  hexa_turret_option = createSprite (20000, 800, 10, 10);
  hexa_turret_option.scale = 0.25;
  quad_turret_option = createSprite (20000, 900, 10, 10);
  quad_turret_option.scale = 0.25;
  quad_turret = createSprite (20000, 900, 10, 10);
  lazer_turret_option = createSprite (20000, 900, 10, 10);
  lazer_turret = createSprite (20000, 900, 10, 10);
  buster_turret = createSprite (20000, 900, 10, 10);
  buster_turret_option = createSprite (20000, 900, 10, 10);
  sniper_turret_option = createSprite (20000, 900, 10, 10);
  big_turret_option = createSprite (20000, 900, 10, 10);
  big_turret_option.scale = 0.25
  rail_gun_turret = createSprite (20000, 900, 10, 10);
  rail_gun_turret_MKII = createSprite (20000, 900, 10, 10);
  rail_gun_turret_MKII_option = createSprite (20000, 900, 10, 10);
  plasma_turret_option = createSprite (20000, 900, 10, 10);
  double_turret = createSprite (20000, 900, 10, 10);
  double_turret.scale = 0.25

 
  //ammo
  rail_gun_ammo = createSprite (20000, 900, 10, 10);
  missle_turret_2_8_missles = createSprite (20000, 900, 10, 10);
  missle_turret_1_8_missles = createSprite (20000, 900, 10, 10);
  missle_turret_3_8_missles = createSprite (20000, 900, 10, 10);
  missle_turret_4_8_missles = createSprite (20000, 900, 10, 10);
  missle_turret_5_8_missles = createSprite (20000, 900, 10, 10);
  missle_turret_6_8_missles = createSprite (20000, 900, 10, 10);
  missle_turret_7_8_missles = createSprite (20000, 900, 10, 10);
  missle_turret_8_8_missles = createSprite (20000, 900, 10, 10);
  missle_turret_0_4_missles = createSprite (20000, 900, 10, 10);
  missle_turret_1_4_missles = createSprite (20000, 900, 10, 10);
  missle_turret_2_4_missles = createSprite (20000, 900, 10, 10);
  missle_turret_3_4_missles = createSprite (20000, 900, 10, 10);
  missle_turret_4_4_missles = createSprite (20000, 900, 10, 10);
  missle_turret_1_2_missles = createSprite (20000, 900, 10, 10);
  missle_turret_2_2_missles = createSprite (20000, 900, 10, 10);
  rocket_projectile = createSprite (20000, 900, 10, 10);
  lazer_bullet = createSprite (20000, 900, 10, 10);
  plasma_ammo = createSprite (20000, 900, 10, 10);
  plasma_ammo.scale = 0.3

 
 
  //rocket booster
  rocket_booster_rear_option = createSprite (20000, 900, 10, 10);
  rocket_booster_rear_option.scale = 0.3
  rocket_booster_MKII_straight = createSprite (20000, 900, 10, 10);
  rocket_booster_MKII_straight.scale = 0.3
  rocket_booster_MKII_turning_right = createSprite (20000, 900, 10, 10);
  rocket_booster_MKII_turning_right.scale = 0.3
  rocket_booster_MKII_turning_left = createSprite (20000, 900, 10, 10);
  rocket_booster_MKII_turning_left.scale = 0.3 

 
  //tier options
  front_tier_1_option = createSprite (850, 900, 10, 10);
  front_tier_1_option.scale = 0.15;
  front_tier_2_option = createSprite (20000, 900, 10, 10);
  front_tier_3_option = createSprite (20000, 900, 10, 10);
  front_tier_4_option = createSprite (20000, 900, 10, 10);
  secondary_tier_1_option = createSprite (950, 900, 10, 10);
  secondary_tier_1_option.scale = 0.15;
  secondary_tier_2_option = createSprite (20000, 900, 10, 10);
  secondary_tier_3_option = createSprite (20000, 900, 10, 10);
  secondary_tier_4_option = createSprite (20000, 900, 10, 10);
  rear_tier_1_option = createSprite (1050, 900, 10, 10);
  rear_tier_1_option.scale = 0.15;
  rear_tier_2_option = createSprite (20000, 900, 10, 10);
  rear_tier_3_option = createSprite (20000, 900, 10, 10);
  rear_tier_4_option = createSprite (20000, 900, 10, 10);
 
  //coins
  blue_triangle = createSprite (200, 900, 10, 10);
  blue_triangle.scale = 0.1
  bronze_coin = createSprite (20000, 900, 10, 10);
  gold_coin = createSprite (20000, 900, 10, 10);
  green_triangle = createSprite (20000, 900, 10, 10);
  red_triangle = createSprite (20000, 900, 10, 10);
  silver_coin = createSprite (20000, 900, 10, 10);

  //9/17/2020  
  rail_gun_turret_option = createSprite (20000, 900, 10, 10);
  rail_gun_turret_option.scale = 0.25
  rocket_booster_MKII_rear_option = createSprite (20000, 900, 10, 10);
  rocket_booster_MKII_rear_option.scale = 0.3
  quad_missle_turret_option = createSprite (20000, 900, 10, 10);
  quad_missle_turret_option.scale = 0.3

  //9-18-2020
  tank_mine = createSprite (20000, 900, 10, 10);
  secondary_machine_gun = createSprite (20000, 900, 10, 10);

  //9-19-2020
  secondary_machine_gun_bullet = createSprite (20000, 900, 10, 10);

  //9-20-2020
  secondary_missile_4_4 = createSprite (20000, 900, 10, 10);
  secondary_missile_3_4 = createSprite (20000, 900, 10, 10);
  secondary_missile_2_4 = createSprite (20000, 900, 10, 10);
  secondary_missile_1_4 = createSprite (20000, 900, 10, 10);
  secondary_missile_0_4 = createSprite (20000, 900, 10, 10);
  secondary_missile_2_2 = createSprite (20000, 900, 10, 10);
  secondary_missile_1_2 = createSprite (20000, 900, 10, 10);
  secondary_missile_0_2 = createSprite (20000, 900, 10, 10);
  secondary_missile_1_1 = createSprite (20000, 900, 10, 10);
  secondary_missile_0_1 = createSprite (20000, 900, 10, 10);
  quad_secondary_machine_gun= createSprite (20000, 900, 10, 10);
  dual_seconddary_machine_gun= createSprite (20000, 900, 10, 10);
  secondary_machine_gun= createSprite (20000, 900, 10, 10);

  //9-22-2020
  dode_turret_option = createSprite (20000, 900, 10, 10);
  dode_turret = createSprite (20000, 900, 10, 10);

  //tank and tank bullet
  tank.addImage ("tankbase", tank_base_image);
 
  //turret
  turret.addImage ("turret.png",turret_image);
  turret_tier_1.addImage ("turret_teir_1.png",turret_tier_1_image);
  turret_tier_2.addImage ("turret_teir_2.png",turret_tier_2_image);
  turret_tier_3.addImage ("turret_teir_1.png",turret_tier_3_image);
  turret_tier_4.addImage ("turret_teir_4.png",turret_tier_4_image);
  double_turret_option.addImage ("dual_turret_option.png",double_turret_option_image);
  dual_missle_turret_option.addImage ("dual_missle_turret_option.png",dual_missle_turret_option_image);
  hexa_turret.addImage ("hexa_turret.png",hexa_turret_image);
  hexa_turret_option.addImage ("hexa_turret_option.png",hexa_turret_option_image);
  quad_turret_option.addImage ("Quad_Turret_Turret.png",quad_turret_option_image);
  quad_turret.addImage("quad_turret.png",quad_turret_image);
  lazer_turret_option.addImage("lazer_turret_option.png",lazer_turret_option_image);
  lazer_turret.addImage("Lazer_Turret.png",lazer_turret_image);
  buster_turret.addImage("buster_turret.png",buster_turret_image);
  buster_turret_option.addImage("buster_turret_option.png",buster_turret_option_image);
  sniper_turret_option.addImage ("Sniper_Turret_Turret.png",sniper_turret_option_image);
  big_turret_option.addImage ("big_turret_option.png",big_turret_option_image);
  rail_gun_turret.addImage ("Rail_Gun_Turret.png",rail_gun_turret_image);
  rail_gun_turret_MKII.addImage ("Rail_Gun_Turret_MKII.png",rail_gun_turret_MKII_image);
  rail_gun_turret_MKII_option.addImage ("RailGun_Turret_MKII_Turret.png",rail_gun_turret_MKII_option_image);
  plasma_turret_option.addImage ("Plasma_Turret_Turret.png",plasma_turret_option_image);
  double_turret.addImage("double_turret.png",double_turret_image);

 
  //ammo
  rail_gun_ammo.addImage ("Rail_Gun_ammo.png",rail_gun_ammo_image);
  missle_turret_2_8_missles.addImage ("Missle_Turret_2_8_Missles.png",missle_turret_2_8_missles_image);
  missle_turret_1_8_missles.addImage ("Missle_Turret_1_8_Missles.png",missle_turret_1_8_missles_image);
  missle_turret_3_8_missles.addImage ("Missle_Turret_3_8_Missles.png",missle_turret_3_8_missles_image);
  missle_turret_4_8_missles.addImage ("Missle_Turret_4_8_Missles.png",missle_turret_4_8_missles_image);
  missle_turret_5_8_missles.addImage ("Missle_Turret_5_8_Missles.png",missle_turret_5_8_missles_image);
  missle_turret_6_8_missles.addImage ("Missle_Turret_6_8_Missles.png",missle_turret_6_8_missles_image);
  missle_turret_7_8_missles.addImage ("Missle_Turret_7_8_Missles.png",missle_turret_7_8_missles_image);
  missle_turret_8_8_missles.addImage ("Missle_Turret_8_8_Missles.png",missle_turret_8_8_missles_image);
  missle_turret_0_4_missles.addImage ("Missle_Turret_0_4_Missles.png",missle_turret_0_4_missles_image);
  missle_turret_1_4_missles.addImage ("Missle_Turret_1_4_Missle.png",missle_turret_1_4_missles_image);
  missle_turret_2_4_missles.addImage ("Missle_Turret_2_4_Missles.png",missle_turret_2_4_missles_image);
  missle_turret_3_4_missles.addImage ("Missle_Turret_3_4_Missles.png",missle_turret_3_4_missles_image);
  missle_turret_4_4_missles.addImage ("Missle_Turret_4_4_Missles.png",missle_turret_4_4_missles_image);
  missle_turret_1_2_missles.addImage ("Missle_Turret_1_2_Missles.png",missle_turret_1_2_missles_image);
  missle_turret_2_2_missles.addImage ("Missle_Turret_2_2_Missles.png",missle_turret_2_2_missles_image);
  rocket_projectile.addImage ("Rocket_Projectile.png",rocket_projectile_image);
  lazer_bullet.addImage ("lazar_bullet.png",lazer_bullet_image);
  plasma_ammo.addImage ("plasma_ammo.png",plasma_ammo_image);

 
 
  //rocket booster
  rocket_booster_rear_option.addImage ("Rocket_Booster_Rear_option.png",rocket_booster_rear_option_image);
  rocket_booster_MKII_straight.addImage ("Rocket_Booster_MKII_Straight.png",rocket_booster_MKII_straight_image);
  rocket_booster_MKII_turning_right.addImage ("Rocket_Booster_MKII_Turning_Right.png",rocket_booster_MKII_turning_right_image);
  rocket_booster_MKII_turning_left.addImage ("Rocket_Booster_MKII_Turning_Left.png",rocket_booster_MKII_turning_left_image);
  
 
  //tier options
  front_tier_1_option.addImage ("front_tier_1.png",front_tier_1_option_image);
  front_tier_2_option.addImage ("front_tier_2.png",front_tier_2_option_image);
  front_tier_3_option.addImage ("front_tier_3.png",front_tier_3_option_image);
  front_tier_4_option.addImage ("front_tier_4.png",front_tier_4_option_image);
  secondary_tier_1_option.addImage ("secondary_tier_1.png",secondary_tier_1_option_image);
  secondary_tier_2_option.addImage ("secondary_tier_2.png",secondary_tier_2_option_image);
  secondary_tier_3_option.addImage ("secondary_tier_3.png",secondary_tier_3_option_image);
  secondary_tier_4_option.addImage ("secondary_tier_4.png",secondary_tier_4_option_image);
  rear_tier_1_option.addImage ("rear_tier_1.png",rear_tier_1_option_image);
  rear_tier_2_option.addImage ("rear_tier_2.png",rear_tier_2_option_image);
  rear_tier_3_option.addImage ("rear_tier_3.png",rear_tier_3_option_image);
  rear_tier_4_option.addImage("rear_tier_4.png",rear_tier_4_option_image);
  
  //coins
  blue_triangle.addImage("blue_triangle.png",blue_triangle_image);
  bronze_coin.addImage("bronze_coin.png",bronze_coin_image);
  gold_coin.addImage("gold_coin_1.png",gold_coin_image);
  green_triangle.addImage("green_triangle.png",green_triangle_image);
  red_triangle.addImage("red_triangle.png",red_triangle_image);
  silver_coin.addImage("silver_coin.png",silver_coin_image);


  //9/17/2020  
  rail_gun_turret_option.addImage("Rail_Gun_Turret_Turret.png",rail_gun_turret_option_image);
  rocket_booster_MKII_rear_option.addImage("Rocket_Booster_MKII_Rear_option.png",rocket_booster_MKII_rear_option_image)
  quad_missle_turret_option.addImage("Quad_Missle_Turret_Turret.png",quad_missle_turret_option_image);

  //9-18-2020
  secondary_machine_gun.addImage("secondary_machine_gun_image",secondary_machine_gun_image)

  //9-19-2020
  secondary_machine_gun_bullet.addImage("secondary_machine_gun_bullet",secondary_machine_gun_bullet_image);

  //9-20-2020
  secondary_missile_4_4.addImage("secondary_missile_4_4.png",secondary_missile_4_4_image);
  secondary_missile_3_4.addImage("secondary_missile_3_4.png",secondary_missile_3_4_image);
  secondary_missile_2_4.addImage("secondary_missile_2_4.png",secondary_missile_2_4_image);
  secondary_missile_1_4.addImage("secondary_missile_1_4.png",secondary_missile_1_4_image);
  secondary_missile_0_4.addImage("secondary_missile_0_4.png",secondary_missile_0_4_image);
  secondary_missile_2_2.addImage("secondary_missile_2_2.png",secondary_missile_2_2_image);
  secondary_missile_1_2.addImage("secondary_missile_1_2.png",secondary_missile_1_2_image);
  secondary_missile_0_2.addImage("secondary_missile_0_2.png",secondary_missile_0_2_image);
  secondary_missile_1_1.addImage("secondary_missile_1_1.png",secondary_missile_1_1_image);
  secondary_missile_0_1.addImage("secondary_missile_0_1.png",secondary_missile_0_1_image);
 
  quad_secondary_machine_gun.addImage("quad_secondary_machine_gun_1.png",quad_secondary_machine_gun_image);
  dual_seconddary_machine_gun.addImage("dual_secondary_machine_gun.png",dual_seconddary_machine_gun_image);
  secondary_machine_gun.addImage("secondary_machine_gun.png", secondary_machine_gun_image);

  //9-22-2020
  dode_turret_option.addImage("dode_turret_option_image",dode_turret_option_image)
  dode_turret.addImage("dode_turret_image",dode_turret_image)

  turret.rotateToDirection=true;

  //tank rotations
  tank.rotateToDirection=true;
  tank.rotation = 180;

  //tank velocity
  tank.velocityX = 4;

}

function draw() {
  background("black");

  //turret placement
  turret.x = tank.x
  turret.y = tank.y


  //accelerate & deccelerate
  if (keyDown("w")){
    tank.velocityX = tank.velocityX+0.08
    turret.velocityX = turret.velocityX+0.08
  }

  if (keyDown("s")){
    tank.velocityX = tank.velocityX-0.08
    turret.velocityY = turret.velocityY-0.08
  }

  //rotate tank
  if (keyDown("d")){
    tank.rotation = tank.rotation+1;
    turret.rotation = turret.rotation+1;
  }

  if (keyDown("a")){
    tank.rotation = tank.rotation-1;
    turret.rotation = turret.rotation-1;
    double_turret.rotation = double_turret.rotation-1;
  }

  //rotate turret
  if (keyDown("right")){
    turret.rotation = turret.rotation+1;
    double_turret.rotation = double_turret.rotation+1;
  }

  if (keyDown("left")){
    turret.rotation = turret.rotation-1;
    double_turret.rotation = double_turret.rotation-1;
  }

  //settings for tank speed limit
  if (tank.velocityX > 7){
    tank.velocityX = 7
  }

  if (tank.velocityX < -7){
    tank.velocityX = -7
  }

  if (turret.velocityX > 7){
    turret.velocityX = 7
  }

  if (turret.velocityX < -7){
    turret.velocityX = -7
  }






  //coins placement
  if(frameCount % 1000 === 0 || isTouching(tank,blue_triangle)) {
    var blue_triangle_placement_x = random(100,900);
    var blue_triangle_placement_y = random(100,900);
    blue_triangle.x = blue_triangle_placement_x;
    blue_triangle.y = blue_triangle_placement_y;  
 }



      //upgrading system
 if (mousePressedOver(turret_tier_1)){
    double_turret_option.x = turret_tier_1.x+55
    double_turret_option.y = turret_tier_1.y-80
         
    big_turret_option.x = turret_tier_1.x+55
    big_turret_option.y = turret_tier_1.y-120

    dual_missle_turret_option.x = turret_tier_1.x+55
   dual_missle_turret_option.y = turret_tier_1.y-160

    rail_gun_turret_option.x = turret_tier_1.x+55
   rail_gun_turret_option.y = turret_tier_1.y-200
  }

       

  if (mousePressedOver(double_turret_option)){
    turret_tier_1.x = 2000;
    turret_tier_2.x = 750;
    double_turret_option.x = 2000;
    big_turret_option.x = 2000;
    dual_missle_turret_option.x = 2000;
    rail_gun_turret_option.x = 2000;
    upgrade_turret_decider = 1
   }

  if (upgrade_turret_decider === 1){
    turret.x = 20000
    double_turret.x = tank.x
    double_turret.y = tank.y
  }

  if (mousePressedOver(turret_tier_2)){
    quad_turret_option.x = turret_tier_2.x+55
    quad_turret_option.y = turret_tier_2.y-80
  }

  if (mousePressedOver(quad_turret_option)){
    turret_tier_2.x = 2000
    turret_tier_3.x = 750
    quad_turret_option.x = 2       
  }

      
 if (mousePressedOver(big_turret_option)){
  turret_tier_1.x = 2000;
   turret_tier_2.x = 750;
   double_turret_option.x = 2000;
   big_turret_option.x = 2000;
  dual_missle_turret_option.x = 2000;
   rail_gun_turret_option.x = 2000;
   upgrade_big_turret_decider = 1
 }

if (mousePressedOver(dual_missle_turret_option)){
   turret_tier_1.x = 2000;
   turret_tier_2.x = 750;
   double_turret_option.x = 2000;
   big_turret_option.x = 2000;
   dual_missle_turret_option.x = 2000;
   rail_gun_turret_option.x = 2000;
   upgrade_missle_decider = 1
}

  if (mousePressedOver(rail_gun_turret_option)){
    turret_tier_1.x = 2000;
    turret_tier_2.x = 750;
    double_turret_option.x = 2000;
    big_turret_option.x = 2000;
    dual_missle_turret_option.x = 2000;
    rail_gun_turret_option.x = 2000;
    upgrade_rail_gun_decider = 1
  }










  //shooting mechanics

  double_turret.rotation = turret.rotation

  var tank_bullet = createSprite (2000, 2000, 10, 10);
  tank_bullet.rotateToDirection = true;
  tank_bullet.scale = -0.3;
  tank_bullet.addImage ("testing", tank_bullet_image);
  tank_bullet.lifetime = 100

  
  var tank_bullet_2 = createSprite (2000, 2000, 10, 10);
  tank_bullet_2.rotateToDirection = true;
  tank_bullet_2.scale = -0.3;
  tank_bullet_2.addImage ("testing", tank_bullet_image);
  tank_bullet_2.lifetime = 100

  //classic turret
  if(keyWentDown("space") && turret.x === tank.x){
    tank_bullet.x = tank.x
    tank_bullet.y = tank.y
    tank_bullet.velocityX = 50;
    tank_bullet.rotation = turret.rotation

  } 
  
  if(keyDown("space") && turret.x === tank.x && frameCount%372 === 0){
    tank_bullet.x = tank.x
    tank_bullet.y = tank.y
    tank_bullet.velocityX = 50;
    tank_bullet.rotation = turret.rotation
  } 

  //dual turret
  if(keyWentDown("space") && double_turret.x === tank.x){
    tank_bullet.x = tank.x
    tank_bullet_2.x = tank.x
    tank_bullet.y = tank.y+20
    tank_bullet_2.y = tank.y-20
    tank_bullet.velocityX = 50;
    tank_bullet_2.velocityX = 50;
    tank_bullet.rotation = turret.rotation
    tank_bullet_2.rotation = turret.rotation
  } 
  
  if(keyDown("space") && double_turret.x === tank.x && frameCount%30 === 0){
    tank_bullet.x = tank.x
    tank_bullet_2.x = tank.x
    tank_bullet.y = tank.y+20
    tank_bullet_2.y = tank.y-20
    tank_bullet.velocityX = 50;
    tank_bullet_2.velocityX = 50;
    tank_bullet.rotation = turret.rotation
    tank_bullet_2.rotation = turret.rotation
  } 


  //score
  textSize(40);
  text("score: "+score, 1600, 50)

  drawSprites();
}
