# Generated by Django 4.0 on 2022-03-09 22:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop_api', '0003_rename_shipingprice_shippingaddress_shippingprice'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='shipping_price',
            new_name='shippingPrice',
        ),
    ]
