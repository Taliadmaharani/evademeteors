let screen = 0; // deklarasi screen awal
var hero, level, peta; // deklarasi variabel hero, peta dan level
var kecepatan = 5; // mengatur kecepatan diawal = 5
var score = 0; // inisialisasi score awal = 0
var posx = 10, posy = 200; // Mengatur Posisi Awal X dan Y hero

function setup() {
  hero = new Hero(10, 200, 20, 20); // set up class Hero 
  level = new Level(1, 1, 5); // set up class Level
  peta = new Map(600, 600); // Setup class Map
  peta.init(); // Memanggil fungsi init pada Class Map
}
