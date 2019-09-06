export class User {
    
        id: string;
        kullanici_adi: string;
        parola: string;
        hatali_giris:number;
        
        constructor(kullanici_adi,parola,hatali_giris){
            this.kullanici_adi =kullanici_adi;
            this.parola = parola;
            this.hatali_giris=hatali_giris;
        }
        

    
}
