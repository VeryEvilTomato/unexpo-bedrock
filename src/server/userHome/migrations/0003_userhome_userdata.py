# Generated by Django 3.0.4 on 2020-03-13 15:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userData', '0002_remove_userdata_home'),
        ('userHome', '0002_auto_20200310_2049'),
    ]

    operations = [
        migrations.AddField(
            model_name='userhome',
            name='userData',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='userData.UserData'),
        ),
    ]
