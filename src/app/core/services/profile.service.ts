import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  getData(): Observable<any>{
    return of({
      id:'c3RvcmllLTasdadsAxLW9nRW5j',
      avatar:'https://i.pinimg.com/736x/e7/b3/33/e7b333f0d57c9822377fef799843f703.jpg',
      verified:true,
      email:'zapatero.ve@gmail.com',
      username:'zapatero.ve',
      followers:'42.1k',
      followings:'756',
      name:'Zapatero Venezuela',
      description:`
      👟 Las mejores marcas en un solo lugar 
      👞 Zapatos, ropa y accesorios 100% originales 
      📍 Venezuela 
      🛒 Compras online aquí 
      👇👇👇`,
      link:'www.zapatero-ve.com',
      stories:[{
        id:'c3RvcmllLTAxLW9nRW5j',
        image: 'https://tentulogo.com/wp-content/uploads/2017/07/nIke-logo.jpg'
      },{
        id:'c3RvcmllLTAyLW9nRW5j',
        image:'https://tentulogo.com/wp-content/uploads/Adidas-CABECERA-POST-BLOG.jpg'
      },{
        id:'c3RvcmllLTAzLW9nRW5j',
        image:'https://cdnmd.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/air_jordan_1.jpg'
      }],
      posts:[{
        id:'c3RvcmllLTAzLW9nRW5j0',
        image:'https://mivitrina.com.co/wp-content/uploads/2021/02/120c65a2-be45-43b7-8670-ef4e8f94fc87.jpg',
        collections:true,
        likes:'22.6k',
        comments:'1.2k'
      },{
        id:'c3RvcmllLTAzLW9nRW5j1',
        image:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=2134&amp;q=80',
        collections:false,
        likes:'10.6k',
        comments:'1.4k'
      },{
        id:'c3RvcmllLTAzLW9nRW5j2',
        image:'https://images.unsplash.com/photo-1617182773316-d005fadbfd68?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80',
        collections:false,
        likes:'28.6k',
        comments:'1.3k'
      },{
        id:'c3RvcmllLTAzLW9nRW5j3',
        image:'https://images.unsplash.com/photo-1554735490-5974588cbc4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2134&amp;q=80',
        collections:true,
        likes:'15.6k',
        comments:'1.6k'
      },{
        id:'c3RvcmllLTAzLW9nRW5j4',
        image:'https://http2.mlstatic.com/D_NQ_NP_959183-MLV45294275897_032021-O.jpg',
        collections:true,
        likes:'14.2k',
        comments:'1.8k'
      },{
        id:'c3RvcmllLTAzLW9nRW5j5',
        image:'https://http2.mlstatic.com/D_NQ_NP_725439-MLV48280760629_112021-O.jpg',
        collections:true,
        likes:'10.3k',
        comments:'1.1k'
      },{
        id:'c3RvcmllLTAzLW9nRW5j6',
        image:'https://http2.mlstatic.com/D_NQ_NP_842224-MLV49008908001_022022-W.jpg',
        collections:false,
        likes:'15.3k',
        comments:'1.2k'
      }],
    }).pipe(delay(1500))
  }
}
