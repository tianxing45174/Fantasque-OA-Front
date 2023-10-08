/*
角色管理相关的API请求函数
*/
import request from '@/utils/request'

const api_name = '/admin/system/sysRole'

export default {

  /**
   获取角色分页列表(带搜索)
   */
  getRolePageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  /**
   * 删除角色 传入 角色id
   */
  removeRoleById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  },
  /**
   * 添加角色
   */
  saveRole(role) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: role
    })
  },
  /**
   * 根据 id 获取角色信息
   */
  getRoleById(id) {
    return request({
      url: `${api_name}/get/${id}`,
      method: 'get'
    })
  },
  /**
   * 修改角色信息
   */
  updateRoleById(role) {
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: role
    })
  }
}
