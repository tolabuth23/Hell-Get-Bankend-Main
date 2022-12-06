interface IStudent {
  name: string
  score: number
}

interface IStore {
  subject: string
  students: IStudent[]
}

interface IStudentUpdateScore {
  name: string
  scores: Record<string, number>
}

interface IRemoveStudentScore {
  name: string
  subject: string
}
interface IStudentScore {
  [key: string]: any
}

export const updateStudentScore = (store: IStore[], update: IStudentUpdateScore): IStore[] => {
  Object.entries(update.scores).forEach(([subject, score],index)=>{
    if(store[index].subject == subject){
      const indexUpdate = store[index].students.findIndex((student)=>student.name == update.name);
      console.log("index ",indexUpdate)
      if (indexUpdate < 0){
        store[index].students.push({name: update.name, score});
      }else{
        store[index].students[indexUpdate] = {name: update.name, score}
      }
    }else{
      store.push({subject: subject, students:[{name: update.name,score}]})
    }
});
return store;
}

export const removeStudentScoreBySubject = (store: IStore[], record: IRemoveStudentScore): IStore[] => {
  store.forEach((element,index)=>{
    if(element.subject == record.subject && element.students[index].name == record.name) store[index].students.splice(index,1);
 });
  return store

}
export const getStudentScoreBySubject = (store: IStore[], subjects: string[]): IStudentScore[] => {
  const getStudent =[];
  store.forEach((e,index)=>{
    const checkStudent = store.find((e)=>e.subject === subjects[index]);
    if(checkStudent){

      const std = checkStudent.students.reduce((pre,cur,i)=>{
        return {...pre, name: e.students[index].name,[subjects[i]]: e.students[i].score}
      },{})

        getStudent.push(std)  
      }
})
  
  return getStudent
}.ml


