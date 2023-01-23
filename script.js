class Anime{
    constructor(name, volume){
        this.name = name;
        this.volume = volume;
    }
    describe(){
        return `${this.name} is a : ${this.volume}`
    }
}

class  List{
    constructor(name) {
        this.name = name
        this.animes = [];
    }
    addAnime(anime) {
        if (anime instanceof Anime){
            this.animes.push(Anime);
        }else {
            throw new Error (`!${volume} is not valid `);
        }

        }    
        describe(){
            return `order:${this.name} has ${this.animes.length} items.`;
        }
    }
class Menu {
    constructor() {
        this.lists = [];
        this.pickedList = null;
 }

    start(){
        let selection = this.showMenu();

        while (selection != 0) {
            switch (selection) {
                case '1': 
                this.createOrder();
                  break;
              case '2':
                  this.viewOrder();
                  break;  
              case '3':
                  this.deleteAnime();
                  break;
              case '4':
                  this.allOrders();
                  break;    
  
              default:
                  selection = 0;    
                       
            }
            selection = this.showMenu();
        }

        alert('bye~!');
    }

    showMenu() {
        return prompt(`
                      welcome to A-lists
     reserve your animes for in person pick up!
        0 - exit
        1 - create list
        2 - browse a list
        3 - delete order
        4 - view all Lists
        `);

    }
    showOrderMenu(listDetails){
        return prompt(`
        0 - back
        1 - add a anime series to order
        2 - delete item from
       ~~~~~~~~~~~~~~~~~~~~
        ${listDetails}`)
    }

    allOrders() {
        let listsString = '';
        for(let i = 0; i < this.lists.length; i++) {
            listsString += i + '- ' + this.lists[i].name + '\n';
        }
        alert(listsString);
    }

    createOrder() {
        let name = prompt('enter a phone number for the order: ');
        this.lists.push(new List(name));
    }
    viewOrder() {
        let index = prompt('enter the order number');
        if (index > -1 && index < this.lists.length) {
            this.pickedList = this.lists[index];
            let info = 'Oder Number: ' + this.pickedList.name + '\n';

            for(let i = 0; i < this.pickedList.animes.length; i++){
                info += i + '- ' + this.pickedList.animes[i].name 
                + ' - ' + this.pickedList.animes[i].volume + '\n';
        } 
          let selection = this.showOrderMenu(info);
    switch(selection){
    case '1':
        this.addAnime();
        break;
    case '2': 
        this.deleteAnime();
    }
    
    }

}

        
    addAnime(){
    let name = prompt(`Enter your anime you want to order:`);     
    let volume = prompt(`Enter volume:`);
    this.pickedList.animes.push(new Anime(name,volume))

} 

    deleteAnime() {
        let index = prompt(`enter the number next to the anime you want to delete:`);
        if(index > -1 && index < this.pickedList.animes.length) {
            this.pickedList.animes.splice(index, 1)
        }
    }

}


let menu = new Menu();
menu.start();




