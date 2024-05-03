import { defineStore } from 'pinia'
import axios from 'axios'
export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: []
  }),
  getters: {
    getAllPosts: (state) => {
      return state.posts
    }
  },
  actions: {
    async getPostsAction() {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_limit=5'
      )
      this.posts = response.data
    },
    async addPostAction(post) {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/Posts', post
      )
      this.posts.unshift(response.data)
    },
    async removePostAction(id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/Posts/${id}`);
      this.posts = this.posts.filter(c => c.id !== id)
    },
    async editPostAction(post) {
      await axios.put(
        `https://jsonplaceholder.typicode.com/Posts/${post.id}`,
        post
      );
      const index = this.posts.findIndex(c => c.id === post.id)
      if (index !== -1) {
        this.posts.splice(index, 1, post)
      }
    },
  },
})
