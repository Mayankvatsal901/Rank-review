const Business=require('../models/business');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')


const RegisterBusiness = async (req, res) => {
  console.log(req.body);

    try {

        const {
            name,
            slug,
            email,
            password,
            location,
            googleLink
        } = req.body;

        // CHECK ALL FIELDS
        if (
            !name ||
            !slug ||
            !email ||
            !password ||
            !location ||
            !googleLink
        ) {

            return res.status(400).json({
                status: false,
                message: "Give full information"
            });
        }

        // CHECK EXISTING BUSINESS
        if(slug!=null){
        const existingBusiness = await Business.findOne({
            $or: [{ slug }, { email }]
        });
      }

        if (existingBusiness) {

            return res.status(400).json({
                status: false,
                message: "Business already exists"
            });
        }

        // HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);

        // CREATE BUSINESS
        const business = await Business.create({
            name,
            slug,
            email,
            password: hashedPassword,
            location,
            googleLink
        });

        // GENERATE JWT TOKEN
        const token = jwt.sign(
            {
                id: business._id,
                email: business.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(201).json({
            status: true,
            message: "Business registered successfully",
            token
        });

    } catch (error) {

        res.status(500).json({
            status: false,
            message: error.message
        });
    }
} 




const UpdateBusiness = async (req, res) => {

  try {

    const businessId = req.business.id;

    const {
      name,
      slug,
      location,
      googleLink,
      email
    } = req.body;

    const updateBusiness =
      await Business.findByIdAndUpdate(

        businessId,

        {
          name,
          slug,
          location,
          googleLink,
          email
        },

        {returnDocument:"after"},

      );

    return res.status(200).json({

      success: true,
      message: "Business updated successfully",
      business: updateBusiness

    });

  } catch (error) {

    return res.status(500).json({

      success: false,
      message: error.message

    });

  }

};



const loginBusiness = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "Please provide both email and password"
      });
    }

    // Find business by email
    const existingBusiness = await Business.findOne({ email });
    if (!existingBusiness) {
      return res.status(400).json({
        status: false,
        message: "Business not found"
      });
    }

    // Compare password
    const pass = existingBusiness.password;
    const check = await bcrypt.compare(password, pass);

    if (!check) {
      return res.status(400).json({
        status: false,
        message: "Wrong password"
      });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: existingBusiness._id,
        email: existingBusiness.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      status: true,
      message: "Business logged in successfully",
      token
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message
    });
  }
};

const getfeature=async(req,res)=>{
  try {
    const{slug}=req.params;
    const information=await Business.findOne({slug});

    if(!information){
       return res.status(404).json({
        status: false,
        message: "Business not registered"
      });

    }
    res.status(200).json({
      sucess:true,
      information:information
    })
    
  } catch (error) {

      return res.status(500).json({
        status: false,
        message:error.message
      });


    
  }
  
}

const CheckBusinessAuthorize = async (req, res) => {

  try {

    const businessId = req.business.id;

    const business =
      await Business.findById(businessId);

    if (!business) {

      return res.status(404).json({

        success: false,
        message: "Business not found"

      });

    }

    return res.status(200).json({

      success: true,
      business

    });

  } catch (error) {

    return res.status(500).json({

      success: false,
      message: error.message

    });

  }

};
const GetBusinessesByLocation = async (req, res) => {

    try {

        const { location } = req.params;

        const businesses = await Business.find({

            location: {
                $regex: new RegExp(location, "i")
            }

        }).select(
            "_id name location"
        );

        res.status(200).json({

            success: true,

            businesses

        });

    }
    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const GoogleCallback =
async (req,res)=>{

try{

const business =
req.user;

const token =
jwt.sign(

{
id:business._id,
email:business.email
},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);

res.redirect(

`http://localhost:5173/google-success?token=${token}`

);

}
catch(error){

res.status(500).json({

status:false,
message:error.message

});

}

};

module.exports={
    RegisterBusiness,
    UpdateBusiness,
    loginBusiness,
    getfeature,
    CheckBusinessAuthorize,
    GetBusinessesByLocation,
    GoogleCallback


}