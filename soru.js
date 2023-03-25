function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("Yirmili yaşlarımdaki en büyük hayalim hangisi?", { a: "Peugot 106", b: "Mercedes G63", c: "Honda Civic" , d:"BMW F30" }, "c"),
    new Soru("2-En sevdiğim film hangisidir?", { a: "Dövüş Kulübü", b: "Recep İvedik", c: "Zindan Adası", d: "Yaralı Yüz" }, "b"),
    new Soru("3-En sevdiğim meyve hangisi?", { a: "Kivi", b: "Çilek", c: "Muz", d: "Kiraz" }, "a"),
    new Soru("4-En sevdiğim dizi hangisidir?", { a: "Son Yaz", b: "Kurtlar Vadisi", c: "Breaking Bad", d: "Punisher" }, "b")
];