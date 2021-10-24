const http = require('http');
const app = require('../../src/server');
const UserDto = require('../../src/apis/users/dto/user.dto');


describe('Test in Api Users', ()=>{

    url = "http://localhost:4000/api";

    it("Get /users/:id ", ()=>{
                http.get(`${url}/users/6169ec60ecf46765d56f2ac4`, (res)=>{

                                  console.log(res.statusCode);

                                  res.on('data', (data)=>{
                                        const jsonData = JSON.parse(data);
                                       
                                        expect(jsonData).toEqual({
                                            _id: "6169ec60ecf46765d56f2ac4",
                                            username: "Yusei-Updated",
                                            email: "updated@gmail.com",
                                            password: "ZeroUpdated",
                                            picture: "update.jpg",
                                            _v: 0
                                        })
                                  })
                                    
                        
                            // _id: '6169ec60ecf46765d56f2ac4',
                            // username: 'Yusei',
                            // email: 'casa@gmail.com',
                            // password: 'ZeroUpdated',
                            // picture: 'updated.jpg',
                            // __v: 0
                        
                    })
                })
            })

                    
                                   
                        
       // res = UserDto(res)

    //    console.log(res);
       
            //  expect(res).toEqual({
            //                     username: "Yusei-Updated",
            //                     email: "updated@gmail.com",
            //                     password: "ZeroUpdated",
            //                    // picture: "updated.jpg",
            //                 })    

        //  request(app)
        //     .get('api/users/6169ec60ecf46765d56f2ac4')
        //     .set('Accept', 'application/json')
        //     .expect('Content-Type', /json/)
        //     .expect(200)
        //     .end((err, res)=>{
        //         if(err){
        //             console.log(err);
        //         }
        //         else
        //         {
        //             expect(res).toEqual({
        //                 _id: "6169ec60ecf46765d56f2ac4",
        //                 username: "Yusei-Updated",
        //                 email: "updated@gmail.com",
        //                 password: "ZeroUpdated",
        //                 picture: "updated.jpg",
        //                 __v: 0
        //             })
        //         }
        //     })
            
  

//     it("Get /users/",()=>{
//         request(app)
//             .get("api/users/")
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(200)
//             .end((err, res)=>{
//                 if(err){
//                     console.log(err);
//                 }
//                 else
//                 {
//                     expect(Array.isArray(res)).toEqual(true)
//                 }
//             })
//     })

//     it("Post /users/", ()=>{
//         request(app)
//             .post("api/users/")
//             .set('Accept', 'application/json')
//             .send({
//                 username : "YuseiTest",
//                 password : "ZeroTest",
//                 email : "test@gmail.com",
//                 picture : "test.jpg"
//             })
//             .expect('Content-Type', /json/)
//             .expect(200)
//             .end((err, res)=>{
//                 if(err){
//                     console.log(err);
//                 }
//                 else
//                 {
//                     expect(res).toEqual({
//                         username : "YuseiTes",
//                         password : "ZeroTest",
//                         email : "test@gmail.com",
//                         picture : "test.jpg"
//                     })
//                 }
//             })
//     })
    
//     it("Put /users/:id", ()=>{

//         request(app)
//             .put("api/users/6169ec60ecf46765d56f2ac4")
//             .set('Accept', 'application/json')
//             .send({
//                 username : "YuseiUpdated",
//                 password : "ZeroUpdated",
//             })
//             .expect('Content-Type', /json/)
//             .expect(200)
//             .end((err, res)=>{
//                 if(err){
//                     console.log(err);
//                 }else{
//                     expect(res).toEqual({
//                         "acknowledged": true,
//                     })
//                 }
//             })
//     })

//     it("Get /users/:id ", ()=>{

//         request(app)
//            .get("api/users/6169ec60ecf46765d56f2ac4")
//            .set('Accept', 'application/json')
//            .expect('Content-Type', /json/)
//            .expect(200)
//            .end((err, res)=>{
//                if(err){
//                    console.log(err);
//                }else{
//                    expect(res).toEqual({
//                     username : "YuseiUpdated",
//                     password : "ZeroUpdated",
//                    })
//                }
//            })
           
//    })

    //  it("Delete /users/:id", ()=>{
    //      // {
    //      //     "deletedCount": 1
    //      // }
    //  })
