from rest_framework import permissions


class IsPostOrIsAuthenticated(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.method == 'POST' or request.user.is_authenticated



class IsGetOrIsAuthenticated():
    def has_permission(self, request, view):
        return request.method == 'GET' or request.user.is_authenticated