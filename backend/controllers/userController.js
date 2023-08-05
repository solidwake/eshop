import asyncHandler from '../middleware/asyncHandler.js'
import User from '../models/UserModel.js'

// @desc  Auth user & get token
// @route POST /data/users/login
// @acces Public
const authUser = asyncHandler(async (req, res) => {
  res.send('auth user')
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