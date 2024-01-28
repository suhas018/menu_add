# Without the serializer, you would have to manually convert each model
# instance to a JSON format, which can be cumbersome and error-prone. 

from rest_framework import serializers

from menu.models import Menu

# ModelSerializer class is a shortcut for adding a serializer 
# for a model to deal with querysets and field validations seamlessly

class MenuSerializer(serializers.ModelSerializer):

    class Meta:
        model = Menu
        fields = ['name', 'price', 'created', 'updated', 'id']
        read_only_fields = ['created', 'updated', 'id']

