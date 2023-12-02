import mysql.connector

class Catalogo:
    def __init__(self, host, user, password, database):
        self.conn = mysql.connector.connect(
        host=host,
        user=user,
        password=password,
        database=database
        )
        self.cursor = self.conn.cursor(dictionary=True)
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS productos (
        codigo INT (20),  
        imagen_url VARCHAR(255),
        titulo VARCHAR(255) NOT NULL,
        descripcion VARCHAR(255) NOT NULL,
        ambientes INT(5) NOT NULL,
        habitaciones INT(4) NOT NULL,
        baños INT(4) NOT NULL,
        telefono VARCHAR(15) NOT NULL)''')
        self.conn.commit()

    def agregar_producto(self,codigo,imagen_url,titulo,descripcion,ambientes,habitaciones,baños,telefono):
    
        self.cursor.execute(f"SELECT * FROM productos WHERE codigo = {codigo}")
        producto_existe = self.cursor.fetchone()
        if producto_existe:
            return False
        sql = f"INSERT INTO productos (codigo, imagen_url, titulo, descripcion, ambientes, habitaciones,baños,telefono) VALUES ({codigo}, '{imagen_url}', '{titulo}', '{descripcion}', {ambientes},{habitaciones},{baños},'{telefono}')"
        self.cursor.execute(sql)
        self.conn.commit()
        return True
    
    def consultar_producto(self, codigo):
        self.cursor.execute(f"SELECT * FROM productos WHERE codigo = {codigo}")
        return self.cursor.fetchone()

    def modificar_producto(self, codigo, nueva_imagen_url, nuevo_titulo, nueva_descripcion, nuevo_ambientes, nueva_habitaciones, nuevo_baños, nuevo_telefono):
        
        sql = f"UPDATE productos SET imagen_url = {nueva_imagen_url}, titulo = {nuevo_titulo}, descripcion = {nueva_descripcion}, ambientes = {nuevo_ambientes}, habitaciones = {nueva_habitaciones}, baños = {nuevo_baños}, telefono = {nuevo_telefono} WHERE codigo = {codigo}"

        self.cursor.execute(sql)
        self.conn.commit()
        return self.cursor.rowcount > 0

    def mostrar_producto(self, codigo):
        producto = self.consultar_producto(codigo)
        if producto:
            print("-" * 40)
            print(f"Código......: {producto['codigo']}")
            print(f"Foto........: {producto['imagen_url']}")
            print(f"Título......: {producto['titulo']}")
            print(f"Descripción.: {producto['descripcion']}")
            print(f"Ambientes...: {producto['ambientes']}")
            print(f"Habitaciones: {producto['habitaciones']}")
            print(f"Baños.......: {producto['baños']}")
            print(f"Teléfono....: {producto['telefono']}")
            print("-" * 40)
        else:
            print("Producto no encontrado.")




        
  



# Programa principal
catalogo=Catalogo(host='localhost', user='root',password='',database='miapp')

catalogo.agregar_producto( 1, 'Corrientes_2564.jpg','Cuando venís a estudiar','Impecable monoambiente con kitchenette', 1, 1, 1,'01148512340')
catalogo.agregar_producto( 2,'Hortiguera_1825.jpg','Por cuestiones de trabajo','A estrenar con excelentes vistas al Parque Chacabuco', 2, 1, 1,'01175896325')

cod_producto = int(input("Ingrese el código del producto: "))
producto = catalogo.consultar_producto(cod_producto)
if producto:
   print(f"Producto encontrado: {producto['descripcion']}")
else:
  print("Producto no encontrado.")

catalogo.mostrar_producto(1)
catalogo.modificar_producto( 1,'Corrientes_2564.jpg','Por días de trabajo','Impecable monoambiente con kitchenette', 3, 2, 2, '01148512340')
catalogo.mostrar_producto(1)
