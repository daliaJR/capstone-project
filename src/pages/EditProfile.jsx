import { React, useEffect, useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { v4 } from 'uuid';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { getAuth, deleteUser } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db, storage } from '../firebase';
import profileImg from '../images/profileImg.png';
import lock from '../images/lock.svg';
import plus from '../images/plus.svg';
import editProfile from '../images/editProfileImg.png';
import { AuthContext } from './Authentic';

/* eslint no-underscore-dangle: 0 */

export default function EditProfile() {
  const navigate = useNavigate();


  // get user from context
  const user = useContext(AuthContext);
  
  const { userId } = user;
  const collection = 'users';

  const [currentUser, setCurrentUser] = useState(user);
  const [message, setMessage] = useState(null);


  const [name, setName] = useState('');
  const [education, setEducation] = useState('');
  const [hobby, setHobby] = useState('');
  const [famSize, setFamSize] = useState('');
  const [gen, setGen] = useState('');
  const [bth, setBth] = useState('');
  const [emi, setEmi] = useState('');
  const [num, setNum] = useState('');
  const [pass, setPass] = useState('');
  const [userObject, setUserObject] = useState({});



  const [imageUpload, setImageUpload] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const u = auth.currentUser;


    if (u) {
      setCurrentUser(u);

    // get document information if it exists
  
    (async () => {
      
      try {
      
      const docRef = doc(db, collection, userId);
      const docSnap = await getDoc(docRef);
      

      // const storage = getStorage();

       // Create a reference under which you want to list
       const listRef = ref(storage, `images/${userId}`);
       
       // test the reference to see if the image exists in storage
       // if it doesn't then skip this block of code

      if(listRef) {
       // Find all the prefixes and items.
      listAll(listRef)
      .then((res) => {
       
        getDownloadURL(ref(storage, res.items[0]._location.path_))
        .then((imgUrl) => {
         
          setUrl(imgUrl);
        })

        
       
       }).catch((error) => {
          throw new Error(error.message);

       });

     };



      if (docSnap.exists()) {
        const userData = docSnap.data();
        
        // this is setting things to undefined if they are blank
        // firebase is sending back undefined so we change it to an empty string if it is undefined 
        setName(userData.fullname || '');
        setEducation(userData.educationlevel || '');
        setHobby(userData.hobbies || '');
        setFamSize(userData.familySize || '');
        setGen(userData.gender || '');
        setBth(userData.date || '');
        setEmi(userData.email || '');
        setNum(userData.phone || '');
        setPass(userData.password || '');

        setUserObject({
          fullname: userData.fullname,
          educationlevel: userData.educationlevel,
          hobbies: userData.hobbies,
          familySize: userData.familySize,
          gender: userData.gender,
          date: userData.date,
          email: userData.email,
          phone: userData.phone,
          password: userData.password,
        });
      } else {
        // console.log('no data exists');
      }

    } catch(err) {
        throw new Error(err.message);
    }
    })();

  }

    // return cleanUp
  }, [userId]);

  // set new form data
  const handleForm = async (e) => {
    e.preventDefault();

    console.log('handleform');
    try {
      await setDoc(doc(db, collection, userId), {
        fullname: name,
        educationlevel: education,
        hobbies: hobby,
        familySize: famSize,
        gender: gen,
        date: bth,
        email: emi,
        phone: num,
        password: pass,
      }).then(() => {
        console.log('success!');
        setMessage('data has been changed');
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  // delete user
  const handleDelete = () => {
    deleteUser(currentUser).then(async () => {
      await deleteDoc(doc(db, collection, userId));
      setMessage('the user has been deleted');
      navigate('/');
    });
    // .catch((error) => {
    //   // console.log(error);
    // });
  };

  


  useEffect(() => {
    
    // save old url to use to delete old profile picture if one exists
    const oldUrl = url;
    

    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${userId}/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      // alert('Image Uploded');

      getDownloadURL(imageRef).then((url1) => {

        setUrl(url1);
      });

      setImageUpload(null);
    });


    // if a profile pic already exists delete it
    if(oldUrl) {

      deleteObject(ref(storage, oldUrl)).then(() => {
        
      });

    }
   
  }, [imageUpload]);

  return (
    <div>
      <div className="flex justify-center self-center px-8 pt-8">
        <p className="text-red-500">
          Please fill all the fields with correct and valid details to complete
          your profile.
        </p>
        <p>{message}</p>
      </div>
      <div className="flex justify-center flex-col lg:flex-row space-y-10 lg:space-y-0 space-x-0 lg:space-x-40 p-5 lg:p-[5rem] xl:p-[8rem]">
        <div className="flex justify-center">
          <div className=" relative left-0 bottom-0 m-0 p-0">
            {url === undefined ? (
              <img
                src={profileImg}
                alt="prfileImage"
                className="w-56 h-56 m-0 pl-7 relative top-0 left-0 bottom-0 z-10"
              />
            ) : (
              <Avatar
                alt="profile image"
                src={url}
                sx={{ width: 150, height: 150 }}
              />
            )}

            <div>
              <label className="text-center" htmlFor="file-input">
                <img
                  src={editProfile}
                  alt="editProfile"
                  className="w-[200] h-12  bg-white rounded-3xl m-0 pl-7 relative top-0 left-0 bottom-0 z-10 cursor-pointer "
                />
              </label>
              <input
                id="file-input"
                className="hidden"
                type="file"
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}
              />
            </div>

            {/* <button onClick={uploadImg}>
              
            </button> */}
          </div>
          
          {/* <div className="relative p-0 m-0">
                        <div className="hidden lg:flex relative p-0 m-0">
                            
                            <img src={profileImg} alt="prfileImage" className=" w-56 h-56 pl-7 m-0 z-10" />
                            <img src={editProfile} alt="editProfile" className="absolute right-12 bottom-1 w-12 h-12 z-50" />
                        </div>
                    </div>  */}
        </div>
        <div className="inputDataField  p-4 flex-shrink-0">
          <form className="flex flex-col gap-6" onSubmit={handleForm}>
            <div className="flex flex-col gap-[2rem]">
              <h2 className="uppercase font-bold text-4xl">profile info</h2>
              <div className="flex justify-between">
                <label htmlFor="fullName" className="w-[10rem]">
                  Full Name:
                </label>
                <input
                  // full name
                  className="border rounded-md focus:shadow-outline w-[20rem]"
                  name="name"
                  id="fullName"
                  type="text"
                  value={name}
                  placeholder={userObject.fullname}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex justify-between">
                {/* education */}
                <label htmlFor="education" className="w-[10rem]">
                  Educational Level:
                </label>
                <select
                  className="form-select border rounded-md focus:shadow-outline w-[20rem]"
                  name="education"
                  id="education"
                  placeholder={userObject.educationlevel ? userObject.educationlevel : ''}
                  value={education || ''}
                  onChange={(e) => setEducation(e.target.value)}
                >
                  <option value="educational-level">{}</option>
                  <option value="high-school">
                    High school graduate or equivalent
                  </option>
                  <option value="bachelor degree">Bachelor degree</option>
                  <option value="master degree">Master degree</option>
                  <option value="doctorate degree">Doctorate degree</option>
                </select>
              </div>

              {/* hobbies */}
              <div className="flex justify-between">
                <label htmlFor="hobbies" className="w-[10rem]">
                  Hobbies:
                </label>
                <input
                  className="border rounded-md focus:shadow-outline w-[20rem]"
                  name="hobbies"
                  id="hobbies"
                  type="text"
                  value={hobby || ''}
                  placeholder={userObject.hobbies}
                  onChange={(e) => setHobby(e.target.value)}
                />
              </div>

              {/* Family Size */}
              <div className="flex justify-between">
                <label htmlFor="familySize" className="w-[10rem]">
                  Family Size:
                </label>
                <div className="flex justify-start w-[20rem]  gap-3">
                  <input
                    className="border rounded-md focus:shadow-outline w-10"
                    name="familySize"
                    id="familySize"
                    type="number"
                    value={famSize || ''}
                    placeholder={userObject.familySize ? userObject.familySize : ''}
                    onChange={(e) => setFamSize(e.target.value)}
                  />
                  <span className="px-2">Member(s)</span>
                </div>
              </div>

              {/* gender */}
              <div className="flex justify-between">
                <label htmlFor="gender" className="w-[10rem]">
                  Gender:
                </label>
                <select
                  className="form-select border rounded-md focus:shadow-outline w-[20rem]"
                  name="gender"
                  id="gender"
                  value={gen || ''}
                  placeholder={userObject.gender ? userObject.gender : ''}
                  onChange={(e) => setGen(e.target.value)}
                >
                  <option value="gender">{}</option>
                  <option value="Woman">Wonan</option>
                  <option value="Man">Man</option>
                  <option value="nonbinary">Nonbinary</option>
                  <option value="prefernottosay">Prefer Not To Say</option>
                </select>
              </div>

              {/* birthday */}
              <div className="flex justify-between">
                <label htmlFor="date" className="w-[10rem]">
                  Birthdate:
                </label>
                <input
                  className="border rounded-md focus:shadow-outline w-[20rem]"
                  name="date"
                  id="date"
                  type="date"
                  value={bth || ''}
                  placeholder={userObject.date ? userObject.date : ''}
                  onChange={(e) => setBth(e.target.value)}
                />
              </div>
              {/* Email */}
              <div className="flex justify-between">
                <label htmlFor="email" className="w-[10rem]">
                  Email:
                </label>
                <input
                  className="border rounded-md focus:shadow-outline w-[20rem]"
                  name="email"
                  id="email"
                  type="email"
                  value={emi || ''}
                  placeholder={userObject.email ? userObject.email : ''}
                  onChange={(e) => setEmi(e.target.value)}
                />
              </div>

              {/* phone number */}
              <div className="flex justify-between">
                <label htmlFor="phone" className="w-[10rem]">
                  Phone Number:
                </label>
                <input
                  className="border rounded-md focus:shadow-outline w-[20rem]"
                  name="phone"
                  id="phone"
                  type="number"
                  value={num || ''}
                  placeholder={userObject.phone ? userObject.phone : ''}
                  onChange={(e) => setNum(e.target.value)}
                />
              </div>

              {/* uploadId */}
              <div className="flex justify-between">
                <label htmlFor="uploadId">Upload ID:</label>
                <div className="relative p-0 m-0">
                  <input
                    className="border rounded-md focus:shadow-outline w-[20rem] pl-7 m-0 h-6"
                    name="uploadId"
                    id="uploadId"
                    type="text"
                  />
                  <img
                    src={plus}
                    alt="add file"
                    className="absolute right-2 bottom-1 w-4 h-4"
                  />
                </div>
              </div>
            </div>

            {/* password */}
            <div className="flex flex-col gap-[2rem] pt-10">
              <h2 className="uppercase font-bold text-xl">Security</h2>
              <div className="flex justify-between">
                <label htmlFor="password" className="w-[10rem]">
                  Password:
                </label>
                <div className="relative p-0 m-0">
                  <input
                    className="border rounded-md focus:shadow-outline w-[20rem] pl-7 m-0 h-6"
                    name="password"
                    id="password"
                    type="password"
                    value={pass || ''}
                    placeholder={userObject.password ? userObject.password : ''}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <img
                    src={lock}
                    alt="lock"
                    className="absolute right-2 bottom-1 w-4 h-4"
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <label htmlFor="confirmPassword" className="w-[10rem]">
                  Confirm Password:
                </label>
                <div className="relative p-0 m-0">
                  <input
                    className="border rounded-md focus:shadow-outline w-[20rem] pl-7 m-0 h-6"
                    name="confirmPassword"
                    id="confirmPassword"
                    type="password"
                  />
                  <img
                    src={lock}
                    alt="lock"
                    className="absolute right-2 bottom-1 w-4 h-4"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2">
              <button className="blue_button mx-2 text-sm " type="submit">
                save changes
              </button>
              <button
                className="blue_button mx-2 text-sm "
                type="button"
                onClick={handleDelete}
              >
                delete account
              </button>
              <button className="blue_button mx-2 text-sm " type="button">
                cancel
              </button>
            </div>
          </form>
          <div>
            <h2 className="uppercase font-bold py-8 text-xl">
              payment methods & tickets
            </h2>
            <div className="flex justify-around lg:justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-sm px-2">3 Cards Added</span>
                <button className="blue_button mx-2 text-sm " type="button">
                  show cards
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm px-2">10 Tickets Remaining</span>
                <button className="blue_button mx-2 text-sm " type="button">
                  buy tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}