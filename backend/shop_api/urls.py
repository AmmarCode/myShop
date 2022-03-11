from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register_user'),
    path('users/profile/', views.getUserProfile, name='user_profile'),
    path('users/profile/update/', views.updateUserProfile,
         name='update_user_profile'),
    path('users/', views.getUsers, name='users'),

    path('products/', views.getProducts, name='products'),
    path('products/<str:pk>/', views.getProduct, name='product'),

    path('orders/add/', views.addOrderItems, name='add_order'),
	path('orders/userorders/', views.getUserOrders, name='user_orders'),
    path('orders/<str:pk>/', views.getOrderById, name='get_order_by_id'),
    path('orders/<str:pk>/pay/', views.updateOrderToPaid, name='update_order_to_paid'),
]
