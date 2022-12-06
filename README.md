# Hell Gate Backend 😈

**Required Tech Stack**

- NestJS Microservice
- MongoDB
- Redis

1.1 ออกแบบระบบร้านหนังสือ โดยมี service ดังนี้ 
  - User Service
  - Book Service
    
1.2 ออกแบบ Features ของ User Service ดังนี้
  - เพิ่ม / ลบ / แก้ไขข้อมูล User
  - แสดงรายการ User แบบ pagination ( สามารถ filter ตามชื่อผู้ใช้งาน , ชื่อ - นามสกุล ได้ )
  - แสดงรายการ User สามารถแสดงจำนวนหนังสือทั้งหมดที่แต่ละ user ซื้อไปได้
  - แสดงรายการ User สามารถแสดงวันที่ซื้อหนังสือล่าสุดของแต่ละ user ได้
  - ระบบ Login (เมื่อมีการล็อคอินผิดพลาด 3 ครั้งจะถูกระงับ 10 วินาที)
  - ระบบรายงานจำนวนสมาชิกใหม่
  - ระบบรายงานจำนวนสมาชิกที่เข้าใช้ระบบ
  - ระบบเปลี่ยน Password
  - ระงับการใช้งาน User

1.3 ออกแบบ Features ของ Book Service ดังนี้
  - เพิ่ม / ลบ / แก้ไขข้อมูล Book
  - แสดงหนังสือ ( filter ตามหมวดหมู่ , เรียงลำดับหนังสือที่เหลือมาก - น้อย , ราคาต่ำ - สูง )
  - ระบบบันทึกการซื้อหนังสือของ user
  - ระบบรายงานหนังสือที่ถูกขายในแต่ละหมวดหมู่ , จัดอันดับหนังสือที่ถูกขายเยอะที่สุด , หนังสือที่ใกล้จะหมด
  - ระบบจัดอันดับผู้ที่ซื้อหนังสือ จำนวนกี่เล่ม แบ่งเป็นหมวดหมู่ละกี่เล่ม ราคาเท่าไหร่
  - User ที่ถูกระงับการใช้งานจะไม่สามารถซื้อหนังสือได้
  
  Optional
- each Book can have an image
- ระบบรายงานสามารถระบุวันเวลาที่ต้องการได้ หรือ เลือกเป็นรายวัน / เดือน / ปี


export const updateStudentScore = (store: IStore[], update: IStudentUpdateScore): IStore[] => {
  console.log("Data befor update :", store)
  const key = Object.keys(update.scores)
  let no = false
  const value = Object.values(update.scores)
    for (let i =0; i<store.length; i++){
      if(store[i].subject == key[i]){
        store[i].students.push({name: update.name, score: value[i]}) 
        no = true
    }
    }
    if(!no){
      for(let j =0;j<key.length; j++){
      store.push({subject: key[j], students:[{name: update.name,score: value[j]}]})
      }
      }
  return store
}
const d = []
  const doubled = store
  .filter((n,i) =>n.subject == subjects[i])
  .map((n,j) =>
   {
    return d.push({name:n.students[j].name, math: n.students[j].score})}
   )
   console.log(doubled)
  console.log(d)


// const keyOfScore = Object.keys(update.scores)
  // let no = false
  // const value = Object.values(update.scores)
  //   for (let i =0; i<store.length; i++){
  //     if(store[i].subject == keyOfScore[i]){
  //       if(update.name == store[i].students[0].name){
  //         store[i].students[0] ={name: update.name, score: value[i]}
  //          no = true
  //         }else{
  //           store[i].students.push({name: update.name, score: value[i]}) 
  //           no = true
  //         }
  //       }
  //   }
  //   if(!no){
  //     for(let j =0;j<keyOfScore.length; j++){
  //     store.push({subject: keyOfScore[j], students:[{name: update.name,score: value[j]}]})
  //     }
      
  //     }
