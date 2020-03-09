# Generated by Django 3.0.4 on 2020-03-09 15:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('nums', '0001_initial'),
        ('logs', '0003_auto_20200305_0347'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='log',
            options={'ordering': ['-opened']},
        ),
        migrations.RemoveField(
            model_name='log',
            name='user_id',
        ),
        migrations.AddField(
            model_name='log',
            name='number',
            field=models.ForeignKey(default='1110001111', on_delete=django.db.models.deletion.CASCADE, to='nums.Number'),
            preserve_default=False,
        ),
    ]