# Generated by Django 4.0 on 2022-03-07 03:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop_api', '0002_product_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shippingaddress',
            old_name='shipingPrice',
            new_name='shippingPrice',
        ),
    ]
