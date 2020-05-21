# Generated by Django 3.0.4 on 2020-05-21 23:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userData', '0008_auto_20200521_1609'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdata',
            name='accessLevel',
            field=models.CharField(choices=[('AL', 'Administrador'), ('NL', 'Normal'), ('LL', 'Limitado')], default='NL', max_length=3, verbose_name='Nivel de acceso'),
        ),
    ]