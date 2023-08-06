import asyncHandler from '../middleware/asyncHandler.js'
import User from '../models/UserModel.js'
import jwt from 'jsonwebtoken'

// @desc  Auth user & get token
// @route POST /data/users/login
// @acces Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      // Set to expire in '1d' for production build
      expiresIn: '30d'
    })

    // Set JWT as HTTP-Only cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days - values are in milliseconds
    })

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc  Register user
// @route POST /data/users
// @acces Public
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user')
})

// @desc  Logout user and clear cookie
// @route POST /data/users/logout
// @acces Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout user')
})

// @desc  Get user profile
// @route GET /data/users/profile
// @acces Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('get user profile')
})

// @desc  Update user profile
// @route PUT /data/users/profile
// @acces Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user profile')
})

// @desc  Get users
// @route GET /data/users
// @acces Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('get users')
})

// @desc  Get user by ID
// @route GET /data/users/:id
// @acces Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send('get user by id')
})

// @desc  Delete user
// @route DELETE /data/users/:id
// @acces Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete user')
})

// @desc  Update user
// @route PUT /data/users/:id
// @acces Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('update user')
})

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser
}