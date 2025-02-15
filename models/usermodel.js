import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    role:{
        type:String,
        required:[true,'role is required'],
        enum:['admin','donor', 'organization', 'hospital'],
    },
    name:{
        type:String,
        required: function(){
            if(this.role === 'admin' || this.role === 'user'){
                return true;
        }
        return false;
    }
    },

    organizationName:{
        type:String,
        required: function(){
            if(this.role === 'organization' || this.role === 'hospital'){
                return true;
        }
        return false;
    }
    },
    hospitalName:{
        type:String,
        required: function(){
            if(this.role === 'hospital'){
                return true;
        }
        return false;
    }
    },

    email:{
        type:String,
        required:[true,'email is required'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'password is required'],
    },
    website: {
        type: String,
    },
    address: {
        type: String,
        required: [true, 'address is required'],
    },
    phone:{
        type:String,
        required:[true,'phone is required'],
    }
    }
);

const User = mongoose.model('User', userSchema);
export default User;