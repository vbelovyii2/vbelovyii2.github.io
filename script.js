document.addEventListener("DOMContentLoaded",function(){
   let slide = document.querySelector('.slide'); // получаем элемент с картинкой
    //Пишем функцию замены классов для изменения картинки
     let count = 0;
    function changeClassSlid(){
        let slides = ['first-slide','second-slide','third-slide']; //массив классов
        slide.classList.remove(slides[0]); //удаляем все классы
        slide.classList.remove(slides[1]);
        slide.classList.remove(slides[2]);
        count++;                                      //увеличиваем счетчик
        slide.classList.add(slides[count]);//показываем класс согласно счетчику
        if (count==2){ ///////Обнуляем счетчик
            count=-1;
        }
        
    }
    setInterval(changeClassSlid,7000); //Меняем картинку каждые 7 секунд
    //////////////////////////////////////////////////////////////////////////////////////////
   ///////////это удалим потом 
    let neucha = document.querySelector('.neucha');
    let ud1 = document.querySelector('.ud1')
    let ud2 = document.querySelector('.ud2')
    
    neucha.addEventListener('mouseover',function(event){
       let target = event.target;
        if (target&&target.classList.contains('ud')){
            ud1.style.display = 'block';
        }
       if (target&&target.classList.contains('element-menu')){
            ud2.style.display = 'block';
        }   
    });
       neucha.addEventListener('mouseout',function(event){
        let target = event.target;
        if (target&&target.classList.contains('ud')){
            ud1.style.display = 'none'}
       if (target&&target.classList.contains('element-menu')){
            ud2.style.display = 'none'}   
        });
////////////////////////////////////////////////////////////////////
        
})
